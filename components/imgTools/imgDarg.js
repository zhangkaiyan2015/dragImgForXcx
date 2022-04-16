// components/imgTool/imgDarg.js
let isClick = true;
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        imgs: [{
            url: 'https://img0.baidu.com/it/u=3879724579,2384271901&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675',
        }, {
            url: 'https://img0.baidu.com/it/u=2775655496,2255017447&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        }, {
            url: 'https://img1.baidu.com/it/u=4127991555,3421789262&fm=253&fmt=auto&app=138&f=JPEG?w=680&h=454',
        }, {
            url: 'https://img2.baidu.com/it/u=4167581070,3859984764&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500',
        }, {
            url: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
        }, {
            url: 'https://img2.baidu.com/it/u=2334262643,3069614641&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        }, {
            url: 'https://img0.baidu.com/it/u=985192759,2265250910&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
        }, {
            url: 'https://img1.baidu.com/it/u=3316754777,2519856621&fm=253&fmt=auto&app=138&f=JPEG?w=653&h=500',
        },{
            url: 'https://img0.baidu.com/it/u=3879724579,2384271901&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675',
        }, {
            url: 'https://img0.baidu.com/it/u=2775655496,2255017447&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        }, {
            url: 'https://img1.baidu.com/it/u=4127991555,3421789262&fm=253&fmt=auto&app=138&f=JPEG?w=680&h=454',
        }, {
            url: 'https://img2.baidu.com/it/u=4167581070,3859984764&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500',
        }, {
            url: 'https://img0.baidu.com/it/u=553569124,3531403696&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=600',
        }, {
            url: 'https://img2.baidu.com/it/u=2334262643,3069614641&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        }, {
            url: 'https://img0.baidu.com/it/u=985192759,2265250910&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
        }, {
            url: 'https://img1.baidu.com/it/u=3316754777,2519856621&fm=253&fmt=auto&app=138&f=JPEG?w=653&h=500',
        }]
    },
    lifetimes: {
        ready() {
            const imgs = this.data.imgs;
            imgs.forEach((item, index) => {
                item.sort = index;
            })
            this.setData({
                imgs
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        disabledMethod() {
            isClick = false
        },
        abledMethod(){
            isClick = true;
        },
        click(e) {
            if (!isClick) return;
            wx.showModal({
                title: '温馨提示',
                content: '点击图片'
            })
        },
        setIndex(e) {
            this.data.startIndex = e.index;
            this.data.selectKey = e.selectKey;
        },
        changeIndex(e) {
            const startIndex = this.data.startIndex;
            const currentIndex = e.index;
            if (startIndex != currentIndex) {
                const imgs = this.data.imgs
                imgs.forEach((item) => {
                    if (currentIndex > startIndex) {
                        if (item.sort > startIndex && item.sort <= currentIndex) {
                            item.sort = item.sort - 1;
                        } else if (item.sort == startIndex) {
                            item.sort = currentIndex
                        } else {
                            item.sort = item.sort
                        }

                    } else {
                        if (item.sort >= currentIndex && item.sort < startIndex) {
                            item.sort = item.sort + 1;
                        } else if (item.sort == startIndex) {
                            item.sort = currentIndex
                        } else {
                            item.sort = item.sort;
                        }
                    }
                })
                this.setData({
                    imgs
                })
                this.data.startIndex = currentIndex;
            }
        },

    }
})
