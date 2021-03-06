var allItemsDataTemp = [{
        type: 4,//类型： 1:pc专题，2：h5，3：平面，4：工作室海报
        title: "",
        desc: "",
        mainImg: "assets/images/hina_pic.png",
        detailImgs: [],
        url: "",
        keywords: []
    },{
        type: 2,
        title: '桑塔纳·浩纳_让爱自在',
        desc: "让孩子活的自在，一起来参与义卖吧！",
        mainImg: "assets/project/sangtana/1.png",
        detailImgs: ["assets/project/sangtana/1.png","assets/project/sangtana/2.png","assets/project/sangtana/3.png","assets/project/sangtana/4.png"],
        url: "http://gd.sina.com.cn/m/dasauto_donate/index.html",
        keywords: ["桑塔纳·浩纳"]
    },{
        type: 2,
        title: '中国(广东)国际"互联网＋"博览会',
        desc: "互联网+热浪来袭，你准备好了吗？",
        mainImg: "assets/project/internetplus/4.png",
        detailImgs: ["assets/project/internetplus/1.png","assets/project/internetplus/2.png","assets/project/internetplus/3.png","assets/project/internetplus/4.png","assets/project/internetplus/5.png","assets/project/internetplus/6.png"],
        url: "http://gd.sina.com.cn/m/2015/internet_plus3/index.html",
        keywords: ["互联网＋","博览会"]
    },{
        type: 2,
        title: "广州酒家派月饼啦",
        desc: "只因为多看了这个游戏一眼，广州酒家免费月饼下午茶就有可能砸中你，一分钟的游戏，咽了59秒的口水！",
        mainImg: "assets/project/gzjj/1.jpg",
        detailImgs: ["assets/project/gzjj/1.jpg","assets/project/gzjj/2.jpg","assets/project/gzjj/3.jpg","assets/project/gzjj/4.jpg","assets/project/gzjj/5.jpg"],
        url: "http://gd.sina.com.cn/m/2015/gzjj/index.html",
        keywords: ["广州酒家","月饼"]
    },{
        type: 1,
        title: "星期五不加班！",
        desc: "星期五不加班！没想到这就是我的第二人生！",
        mainImg: "assets/project/fridaypc/0.jpg",
        detailImgs: ["assets/project/fridaypc/1.jpg"],
        url: "http://gd.sina.com.cn/zt/friday/index.html",
        keywords: ["星期五","不加班"]
    },{
        type: 2,
        title: "星期五不加班！",
        desc: "星期五不加班！没想到这就是我的第二人生！",
        mainImg: "assets/project/friday/1.jpg",
        detailImgs: ["assets/project/friday/1.jpg","assets/project/friday/2.jpg","assets/project/friday/3.jpg","assets/project/friday/4.jpg"],
        url: "http://gd.sina.com.cn/zt/friday2/index.html",
        keywords: ["星期五","不加班"]
    },{
        type: 2,
        title: "怒放冲冠",
        desc: "#怒放冲冠#欧冠表情帝来啦！玩游戏，赢大奖！豪华音响、千元油卡等你来拿！",
        mainImg: "assets/project/nfnq/1.jpg",
        detailImgs: ["assets/project/nfnq/1.jpg","assets/project/nfnq/2.jpg","assets/project/nfnq/3.jpg","assets/project/nfnq/4.jpg","assets/project/nfnq/5.jpg","assets/project/nfnq/6.jpg"],
        url: "http://gd.sina.com.cn/m/dfrc/index.html",
        keywords: ["怒放冲冠","欧冠"]
    },{
        type: 2,
        title: "寻找羊城英雄",
        desc: "我们的羊城英雄",
        mainImg: "assets/project/loulan/1.png",
        detailImgs: ["assets/project/loulan/1.png","assets/project/loulan/2.png","assets/project/loulan/3.png","assets/project/loulan/4.png","assets/project/loulan/5.png"],
        url: "http://gd.sina.com.cn/m/2015/hero/index.html",
        keywords: ["羊城","英雄","投票"]
    },{
        type: 2,
        title: "“跳不跳”，进来看看，说不定就是转机！",
        desc: "招聘_新浪广东_新浪网",
        mainImg: "assets/project/sinajob2016/1.png",
        detailImgs: ["assets/project/sinajob2016/1.png","assets/project/sinajob2016/2.png","assets/project/sinajob2016/3.png","assets/project/sinajob2016/4.png","assets/project/sinajob2016/5.png"],
        url: "http://gd.sina.com.cn/m/2015/job/index.html",
        keywords: ["新浪广东","招聘"]
    },{
        type: 2,
        title: "从关键词看南沙自贸区一周年",
        desc: "一分钟看懂这份靓丽成绩单。",
        mainImg: "assets/project/nszmq/1.jpg",
        detailImgs: ["assets/project/nszmq/1.jpg","assets/project/nszmq/2.jpg","assets/project/nszmq/3.jpg"],
        url: "http://gd.sina.com.cn/m/2016/nszmq/index.html",
        keywords: ["南沙","一周年"]
    },{
        type: 2,
        title: "蓝·生活 回归生活本色",
        desc: "广东电网2016“地球一小时”特别策划，邀您开启蓝·生活，回归生活本色。",
        mainImg: "assets/project/lanshenghuo/1.jpg",
        detailImgs: ["assets/project/lanshenghuo/1.jpg","assets/project/lanshenghuo/2.jpg","assets/project/lanshenghuo/3.jpg","assets/project/lanshenghuo/4.jpg","assets/project/lanshenghuo/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/lanshenghuo/index.html",
        keywords: ["邮轮","图片合成"]
    },{
        type: 2,
        title: "给家人无与“轮”比的幸福",
        desc: "处女星号广州-日本航线4月17日首航，晒幸福，赢免费邮轮之旅！",
        mainImg: "assets/project/lxyl/1.jpg",
        detailImgs: ["assets/project/lxyl/1.jpg","assets/project/lxyl/2.jpg","assets/project/lxyl/3.jpg","assets/project/lxyl/4.jpg","assets/project/lxyl/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/lxyl/index.html",
        keywords: ["邮轮","图片合成"]
    },{
        type: 2,
        title: "你敢加入10天跑步计划吗？",
        desc: "十天为期，每日打卡，欢迎监督~！你收获的将不仅仅是大奖！",
        mainImg: "assets/project/repao/1.jpg",
        detailImgs: ["assets/project/repao/1.jpg","assets/project/repao/2.jpg","assets/project/repao/3.jpg","assets/project/repao/4.jpg","assets/project/repao/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/repao/index.html",
        keywords: ["打卡","十天","跑步"]
    },{
        type: 2,
        title: "电亮小康梦 海南环岛行",
        desc: "《中共中央关于制定国民经济和社会发展第十三个五年规划的建议》提出了全面建成小康社会新的目标要求，“生态环境质量”被放在了“各方面制度”之前。 “海南环岛行”以纯电动车出行，从海口开始，环岛而行，一路探访一岛双廊清洁能源发电功能，宣扬中国电力发展成效，坚定节能环保的信心， 在途中，也会去到贫困小学进行公益活动。",
        mainImg: "assets/project/dlxkmh5/1.jpg",
        detailImgs: ["assets/project/dlxkmh5/1.jpg","assets/project/dlxkmh5/2.jpg","assets/project/dlxkmh5/3.jpg","assets/project/dlxkmh5/4.jpg","assets/project/dlxkmh5/5.jpg","assets/project/dlxkmh5/6.jpg"],
        url: "http://gd.sina.com.cn/m/2015/hnhdx/index.html",
        keywords: ["电亮","海南","环岛行"]
    },{
        type: 1,
        title: "电亮小康梦 海南环岛行",
        desc: "《中共中央关于制定国民经济和社会发展第十三个五年规划的建议》提出了全面建成小康社会新的目标要求，“生态环境质量”被放在了“各方面制度”之前。 “海南环岛行”以纯电动车出行，从海口开始，环岛而行，一路探访一岛双廊清洁能源发电功能，宣扬中国电力发展成效，坚定节能环保的信心， 在途中，也会去到贫困小学进行公益活动。",
        mainImg: "assets/project/dlxkm/1.jpg",
        detailImgs: ["assets/project/dlxkm/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2015/hnhdx/index.html",
        keywords: ["电亮","海南","环岛行"]
    },{
        type: 3,
        title: "增城城市形象",
        desc: "",
        mainImg: "assets/project/zccity/1.jpg",
        detailImgs: ["assets/project/zccity/1.jpg"],
        url: "",
        keywords: ["增城","城市形象"]
    },{
        type: 3,
        title: "大众活动-悬念海报",
        desc: "",
        mainImg: "assets/project/dzmother/1.jpg",
        detailImgs: ["assets/project/dzmother/1.jpg","assets/project/dzmother/2.jpg","assets/project/dzmother/3.jpg","assets/project/dzmother/4.jpg"],
        url: "",
        keywords: ["大众","悬念海报"]
    },{
        type: 1,
        title: "2017政务V影响力峰会",
        desc: "2017年1月19日，由人民日报、微博、新浪网联合主办的“创新•协同•共治——2017政务V影响力峰会”将于广州市举行。政务V影响力峰会作为行业最具影响的活动，将邀请国家部委、省、市各级各类政府机构领导参加，共同分享总结2016年度政务微博取得的成绩，深入探讨政务微博发展趋势。会上还将发布《2016政务微博报告》，对优秀政务微博机构及个人进行表影。",
        mainImg: "assets/project/fenghui/1.jpg",
        detailImgs: ["assets/project/fenghui/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2017/fenghui/index.html",
        keywords: ["政务","影响力","峰会"]
    },{
        type: 3,
        title: "经济活力看广东-省宣-KV",
        desc: "",
        mainImg: "assets/project/jjhl/1.jpg",
        detailImgs: ["assets/project/jjhl/1.jpg"],
        url: "",
        keywords: ["经济活力","KV"]
    },{
        type: 3,
        title: "表白韶关-韶关市宣-动态海报",
        desc: "",
        mainImg: "assets/project/sgqx/1.jpg",
        detailImgs: ["assets/project/sgqx/1.gif","assets/project/sgqx/2.gif","assets/project/sgqx/3.gif"],
        url: "",
        keywords: ["表白","动态海报"]
    },{
        type: 3,
        title: "顺德工匠第二期-顺德区宣-海报",
        desc: "",
        mainImg: "assets/project/sdqx2/1.jpg",
        detailImgs: ["assets/project/sdqx2/1.jpg","assets/project/sdqx2/2.jpg","assets/project/sdqx2/3.jpg","assets/project/sdqx2/4.jpg","assets/project/sdqx2/5.jpg","assets/project/sdqx2/6.jpg"],
        url: "",
        keywords: ["顺德","工匠","海报"]
    },{
        type: 3,
        title: "顺德工匠第一期-顺德区宣-海报",
        desc: "",
        mainImg: "assets/project/sdqx1/1.jpg",
        detailImgs: ["assets/project/sdqx1/1.jpg","assets/project/sdqx1/2.jpg","assets/project/sdqx1/3.jpg","assets/project/sdqx1/4.jpg","assets/project/sdqx1/5.jpg","assets/project/sdqx1/6.jpg","assets/project/sdqx1/7.jpg"],
        url: "",
        keywords: ["顺德","工匠","海报"]
    },{
        type: 1,
        title: "2016中国国际旅游产业博览会",
        desc: "2016中国（广东）国际旅游产业博览会最前线。",
        mainImg: "assets/project/lvbohuipc/1.jpg",
        detailImgs: ["assets/project/lvbohuipc/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/lvbohui/index.html",
        keywords: ["旅博会","旅游","前线"]
    },{
        type: 1,
        title: "全新轩逸，科技升级",
        desc: "“逸”爱倾城--购东风日产全新轩逸，尊享“4”大星级礼遇。",
        mainImg: "assets/project/rcxuanyi/1.jpg",
        detailImgs: ["assets/project/rcxuanyi/2.jpg"],
        url: "http://gd.sina.com.cn/zt/xuanyigz20160325/index.html",
        keywords: ["日产","轩逸"]
    },{
        type: 3,
        title: "冰雪嘉年华-韶关丽宫-KV",
        desc: "",
        mainImg: "assets/project/bxjnh/1.jpg",
        detailImgs: ["assets/project/bxjnh/1.jpg"],
        url: "",
        keywords: ["冰雪","丽宫","KV"]
    },{
        type: 2,
        title: "中国人保广东给您拜年啦",
        desc: "恭祝您：身体猴棒猴棒的，挣钱猴多猴多的，运气猴顺猴顺的，一切猴甜猴甜的!",
        mainImg: "assets/project/rbxnzf/1.jpg",
        detailImgs: ["assets/project/rbxnzf/1.jpg","assets/project/rbxnzf/2.jpg","assets/project/rbxnzf/3.jpg","assets/project/rbxnzf/4.jpg","assets/project/rbxnzf/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/rbxnzf/index.html",
        keywords: ["人保","拜年","卡通"]
    },{
        type: 2,
        title: "汽车投诉，你吐槽我派奖！",
        desc: "买车用车有什么要投诉吐槽的都可以在这说，还能参与抽奖赢取礼品喔",
        mainImg: "assets/project/carchoujiang/1.jpg",
        detailImgs: ["assets/project/carchoujiang/1.jpg","assets/project/carchoujiang/2.jpg","assets/project/carchoujiang/3.jpg"],
        url: "http://gd.sina.com.cn/m/2016/choujiang/index.html",
        keywords: ["投诉","抽奖","游戏"]
    },{
        type: 2,
        title: "一键了解乐动健康跑",
        desc: "华夏广州乐动健康跑以二沙岛宏城公园为起点及终点，全程约5公里，环绕广州绿量最密集的绿岛，沿珠江边绿道奔跑。",
        mainImg: "assets/project/ldpaobu/1.jpg",
        detailImgs: ["assets/project/ldpaobu/2.jpg"],
        url: "http://gd.sina.com.cn/m/2016/huaxia/ldpaobu/index.html",
        keywords: ["乐动","健康跑","广州"]
    },{
        type: 2,
        title: "美食特工带你游广东",
        desc: "吃货天团终极推荐：十大广东精品美食线路！有选择困难症的吃货看这里，跟着逛吃就对了！",
        mainImg: "assets/project/mstg/1.jpg",
        detailImgs: ["assets/project/mstg/1.jpg","assets/project/mstg/2.jpg","assets/project/mstg/3.jpg"],
        url: "http://gd.sina.com.cn/m/2016/mstg/index.html",
        keywords: ["美食","吃货","广东"]
    },{
        type: 1,
        title: "日产新TIIDA",
        desc: "新TIIDA，动起来！",
        mainImg: "assets/project/qida/1.jpg",
        detailImgs: ["assets/project/qida/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/qida-2/index.html",
        keywords: ["日产","骐达","TIIDA"]
    },{
        type: 2,
        title: "顺德匠心 网红直播",
        desc: "一起来看顺德工匠直播吧！",
        mainImg: "assets/project/jiangxin/1.jpg",
        detailImgs: ["assets/project/jiangxin/1.jpg","assets/project/jiangxin/2.jpg","assets/project/jiangxin/3.jpg"],
        url: "http://gd.sina.com.cn/m/2016/shunde/jiangxin2/index.html",
        keywords: ["匠心","工匠","直播"]
    },{
        type: 2,
        title: "2016寻找广东最美家庭",
        desc: "粤有爱，越温暖。争做“最美家庭”，共建美丽家园。",
        mainImg: "assets/project/zmjt/1.jpg",
        detailImgs: ["assets/project/zmjt/1.jpg","assets/project/zmjt/2.jpg","assets/project/zmjt/3.jpg","assets/project/zmjt/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/zmjt/index.html",
        keywords: ["温暖","最美家庭"]
    },{
        type: 2,
        title: "一“路”蜕变，顺德崛起",
        desc: "7号线顺德段今天正式动工啦！|新浪广东出品",
        mainImg: "assets/project/shundesubway/1.jpg",
        detailImgs: ["assets/project/shundesubway/1.jpg","assets/project/shundesubway/2.jpg","assets/project/shundesubway/3.jpg","assets/project/shundesubway/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/shundesubway/index.html",
        keywords: ["顺德","7号线"]
    },{
        type: 2,
        title: "熬胶点",
        desc: "查询离您最近的熬胶点。",
        mainImg: "assets/project/ejiaolocation/1.jpg",
        detailImgs: ["assets/project/ejiaolocation/1.jpg","assets/project/ejiaolocation/2.jpg"],
        url: "http://gd.sina.com.cn/m/2016/ejiao/location/index.html",
        keywords: ["熬胶点","查询","定位"]
    },{
        type: 1,
        title: "广州“微天气”",
        desc: "你的冷暖 在我心中_广州气象局!",
        mainImg: "assets/project/gzqxj/1.jpg",
        detailImgs: ["assets/project/gzqxj/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/gzqxj/index.html",
        keywords: ["微天气","气象局"]
    },{
        type: 2,
        title: "DIY我的毕业证书",
        desc: "快来制作属于你的毕业证书吧！",
        mainImg: "assets/project/rbbyzs/1.jpg",
        detailImgs: ["assets/project/rbbyzs/1.jpg","assets/project/rbbyzs/2.jpg","assets/project/rbbyzs/3.jpg","assets/project/rbbyzs/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/rbbyzs/index.html",
        keywords: ["图片合成","毕业证书"]
    },{
        type: 2,
        title: "不止于荔枝—2016年增城荔枝节",
        desc: "增城荔枝不止于荔枝，更是情怀！— 新浪广东。",
        mainImg: "assets/project/litchi/1.jpg",
        detailImgs: ["assets/project/litchi/1.jpg","assets/project/litchi/2.jpg","assets/project/litchi/3.jpg","assets/project/litchi/4.jpg","assets/project/litchi/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/litchi/index.html",
        keywords: ["增城","2016","荔枝"]
    },{
        type: 2,
        title: "#寻找羊角百万粉#刮卡拿奖品",
        desc: "成为@广州地铁 粉丝，刮奖赢取千元礼品。",
        mainImg: "assets/project/guaguaka/1.jpg",
        detailImgs: ["assets/project/guaguaka/1.jpg"],
        url: "http://gd.sina.com.cn/m/2016/gzmetro/guaguaka/index.html",
        keywords: ["地铁","刮卡","奖品"]
    },{
        type: 1,
        title: "首次聚划算，你买我捐",
        desc: "7月把爱传递下去，一分也是爱。",
        mainImg: "assets/project/kingkow/1.jpg",
        detailImgs: ["assets/project/kingkow/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/kingkow/index.html",
        keywords: ["小笑牛","聚划算"]
    },{
        type: 1,
        title: "日产7-8月促销",
        desc: "技术日产，人车生活。",
        mainImg: "assets/project/nissan/1.jpg",
        detailImgs: ["assets/project/nissan/2.jpg"],
        url: "http://gd.sina.com.cn/pc/2016/nissan-all/index.html",
        keywords: ["日产","促销"]
    },{
        type: 2,
        title: "挑战一分钟拼图",
        desc: "这样的南沙，你一定没见过。",
        mainImg: "assets/project/nansha/1.jpg",
        detailImgs: ["assets/project/nansha/1.jpg","assets/project/nansha/2.jpg","assets/project/nansha/3.jpg","assets/project/nansha/4.jpg","assets/project/nansha/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/nansha/index.html",
        keywords: ["南沙","一分钟","拼图"]
    },{
        type: 2,
        title: "行走的责任",
        desc: "中国南方电网公司2015年社会责任报告。",
        mainImg: "assets/project/dianwang/1.jpg",
        detailImgs: ["assets/project/dianwang/1.jpg","assets/project/dianwang/2.jpg","assets/project/dianwang/3.jpg","assets/project/dianwang/4.jpg","assets/project/dianwang/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/dianwang/index.html",
        keywords: ["南网","行走","报告"]
    },{
        type: 2,
        title: "恐高者慎入！高空玩转高压电场之旅",
        desc: "广东电网“带电者联盟”带你感受全国最高500千伏带电作业。",
        mainImg: "assets/project/dianta/1.jpg",
        detailImgs: ["assets/project/dianta/1.jpg","assets/project/dianta/2.jpg","assets/project/dianta/3.jpg"],
        url: "http://gd.sina.com.cn/m/2016/nanwang/dianta/index.html",
        keywords: ["电网","带电作业"]
    },{
        type: 2,
        title: "西樵山功夫英雄传",
        desc: "超级马拉松开启跑林大会！下一个英雄就是你~",
        mainImg: "assets/project/paolindahui/1.jpg",
        detailImgs: ["assets/project/paolindahui/1.jpg","assets/project/paolindahui/2.jpg","assets/project/paolindahui/3.jpg","assets/project/paolindahui/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/paolindahui/index.html",
        keywords: ["西樵山","功夫"]
    },{
        type: 2,
        title: "#寻找羊角百万粉#玩游戏拿大奖",
        desc: "另外，羊角君为第一百万位的粉丝准备了神秘大奖哟!",
        mainImg: "assets/project/gzmetro/1.jpg",
        detailImgs: ["assets/project/gzmetro/1.jpg","assets/project/gzmetro/2.jpg","assets/project/gzmetro/3.jpg","assets/project/gzmetro/4.jpg","assets/project/gzmetro/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/gzmetro/millionfans/index.html",
        keywords: ["地铁","百万","粉丝"]
    },{
        type: 2,
        title: "你真的懂自己？",
        desc: "其实你还不懂自己，原来在旅途中你是这样的一个人!",
        mainImg: "assets/project/tourism/1.jpg",
        detailImgs: ["assets/project/tourism/1.jpg","assets/project/tourism/2.jpg","assets/project/tourism/3.jpg","assets/project/tourism/4.jpg","assets/project/tourism/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/renbao/tourism/index.html",
        keywords: ["人保","旅行"]
    },{
        type: 1,
        title: "日产轩逸",
        desc: "逸驾童行-轩逸安全家计划。",
        mainImg: "assets/project/xuanyi/1.jpg",
        detailImgs: ["assets/project/xuanyi/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/xuanyi/index.html",
        keywords: ["东风日产","新轩逸"]
    },{
        type: 1,
        title: "广州珠江跑群",
        desc: "广州珠江跑群介绍。",
        mainImg: "assets/project/zhujiangqunpao/1.jpg",
        detailImgs: ["assets/project/zhujiangqunpao/2.jpg"],
        url: "http://gd.sina.com.cn/m/2016/gz_zhujiangqunpao/index.html",
        keywords: ["珠江跑群"]
    },{
        type: 1,
        title: "传祺GS4-擎动世界势不可挡",
        desc: "广汽传祺GS4 235T，GA6 235T搭载全新1.5T动力，于3月上市。精雕细琢，极致呈现细条曲面之美。采用顶级可变机油泵，实况调整机油流量，有效降低耗损。驾乘者为先的理念，凭借更大空间满足多样化需求。智联网、EPB电子手刹、ESP 9.1、智能无钥匙进入等超高配置，完美融合科技与安全。更多体验，欢迎前往当地经销商咨询,试乘试驾更有好礼相送。",
        mainImg: "assets/project/gqcqgs4/1.jpg",
        detailImgs: ["assets/project/gqcqgs4/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/gqcqgs4/index.html",
        keywords: ["传祺","GS4","广汽"]
    },{
        type: 2,
        title: "16升的告白",
        desc: "华帝为你送上16升火辣辣的爱。",
        mainImg: "assets/project/saylove/1.jpg",
        detailImgs: ["assets/project/saylove/1.jpg","assets/project/saylove/2.jpg","assets/project/saylove/3.jpg","assets/project/saylove/4.jpg","assets/project/saylove/5.jpg","assets/project/saylove/6.jpg","assets/project/saylove/7.jpg"],
        url: "http://gd.sina.com.cn/m/2016/huadi/saylove/index.html",
        keywords: ["华帝","告白","16升"]
    },{
        type: 2,
        title: "人保助力开学季",
        desc: "万万没想到，上个学竟然如此艰难,PICC中国人民保险助力开学季。",
        mainImg: "assets/project/zlkxj/1.jpg",
        detailImgs: ["assets/project/zlkxj/1.jpg","assets/project/zlkxj/2.jpg","assets/project/zlkxj/3.jpg","assets/project/zlkxj/4.jpg","assets/project/zlkxj/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/renbao/zlkxj/index.html",
        keywords: ["人保","开学","小游戏"]
    },{
        type: 2,
        title: "广州最美大S",
        desc: "北京路文化旅游区正式挂牌国家4A级旅游景区啦！",
        mainImg: "assets/project/gzzmds/1.jpg",
        detailImgs: ["assets/project/gzzmds/1.jpg","assets/project/gzzmds/2.jpg","assets/project/gzzmds/3.jpg","assets/project/gzzmds/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/gzzmds/index.html",
        keywords: ["北京路","大S","景区"]
    },{
        type: 2,
        title: "休闲特工带你潮玩海岛",
        desc: "一起重返17岁，尝遍广东海岛鲜玩法！",
        mainImg: "assets/project/cwxxtg/1.jpg",
        detailImgs: ["assets/project/cwxxtg/1.jpg","assets/project/cwxxtg/2.jpg","assets/project/cwxxtg/3.jpg","assets/project/cwxxtg/4.jpg","assets/project/cwxxtg/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/cwxxtg/index.html",
        keywords: ["休闲","潮玩","特工"]
    },{
        type: 2,
        title: "旅博会-一封来自宇宙的邀请",
        desc: "在限定时间内点击按钮为火箭加油，点击的次数越多，获得的飞行能量则越多。排名越高则有机会获得越高价值的奖品。",
        mainImg: "assets/project/lvbohui/1.jpg",
        detailImgs: ["assets/project/lvbohui/1.jpg","assets/project/lvbohui/2.jpg","assets/project/lvbohui/3.jpg","assets/project/lvbohui/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/lvbohui/index.html",
        keywords: ["旅博会","邀请"]
    },{
        type: 2,
        title: "华夏带你去旅行",
        desc: "晒旅行美照，赢丰富奖品",
        mainImg: "assets/project/huaxialvxing/1.jpg",
        detailImgs: ["assets/project/huaxialvxing/1.jpg","assets/project/huaxialvxing/2.jpg","assets/project/huaxialvxing/3.jpg","assets/project/huaxialvxing/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/huaxia/lvxing/index.html",
        keywords: ["华夏","DIY","杂志"]
    },{
        type: 2,
        title: "东坡带你养生游",
        desc: "古今穿越看惠州。",
        mainImg: "assets/project/sudongpo/1.jpg",
        detailImgs: ["assets/project/sudongpo/1.jpg","assets/project/sudongpo/2.jpg","assets/project/sudongpo/3.jpg","assets/project/sudongpo/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/sudongpo/index.html",
        keywords: ["东坡","惠州","养生"]
    },{
        type: 2,
        title: "相约二沙音乐岛",
        desc: "玩出你的音乐DNA，赢2016广州爵士音乐节门票！",
        mainImg: "assets/project/musicfestival/1.jpg",
        detailImgs: ["assets/project/musicfestival/1.jpg","assets/project/musicfestival/2.jpg","assets/project/musicfestival/3.jpg","assets/project/musicfestival/4.jpg","assets/project/musicfestival/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/musicfestival/index.html",
        keywords: ["二沙岛","音乐","DNA"]
    },{
        type: 2,
        title: "2016年海珠区政府工作报告",
        desc: "2016年海珠区政府工作报告。",
        mainImg: "assets/project/hzlh/2.jpg",
        detailImgs: ["assets/project/hzlh/1.jpg","assets/project/hzlh/2.jpg","assets/project/hzlh/3.jpg","assets/project/hzlh/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/hzlh/index.html",
        keywords: ["海珠","政府","报告"]
    },{
        type: 2,
        title: "人保67周年 倾情守护",
        desc: "1949-2016，67年倾情守护，中国人保，说到做到！热烈庆祝PICC中国人民保险成立67周年。",
        mainImg: "assets/project/rbbirthday/2.jpg",
        detailImgs: ["assets/project/rbbirthday/1.jpg","assets/project/rbbirthday/2.jpg","assets/project/rbbirthday/3.jpg","assets/project/rbbirthday/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/renbao/birthday/index.html",
        keywords: ["人保","67周年"]
    },{
        type: 1,
        title: "走出趣爱不同",
        desc: "中移互联网大型城市徒步活动。",
        mainImg: "assets/project/ydwtb/1.jpg",
        detailImgs: ["assets/project/ydwtb/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/ydwtb/index.html",
        keywords: ["走出趣","移动","徒步"]
    },{
        type: 1,
        title: "丽星邮轮",
        desc: "丽星邮轮给深圳一个暖冬专题。",
        mainImg: "assets/project/lixing/1.jpg",
        detailImgs: ["assets/project/lixing/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/lixing/index.html",
        keywords: ["丽星邮轮","暖冬"]
    },{
        type: 2,
        title: "韶关丽宫冰火奇幻之旅",
        desc: "Go！玩游戏抽大奖，丽宫送你真正的冰火奇幻旅行。",
        mainImg: "assets/project/sglgwq/1.jpg",
        detailImgs: ["assets/project/sglgwq/1.jpg","assets/project/sglgwq/2.jpg","assets/project/sglgwq/3.jpg","assets/project/sglgwq/4.jpg"],
        url: "http://interface.gd.sina.com.cn/gd/mypic/sglgwq/index.html",
        keywords: ["丽宫","冰火","小游戏"]
    },{
        type: 1,
        title: "东阿阿胶养生文化盛典",
        desc: "“滋补养生，滋养阿胶”东阿阿胶养生文化盛典是东阿阿胶股份有限公司在广东省广州、深圳、东莞等城市举行的系列滋补养生文化活动。活动现场围绕岭南养生文化、阿胶滋补文化等内容展开，广东省知名名人、达人、名医专家等现场分享滋补养生经验，阿胶滋补养生文化展区展现阿胶千年文化。",
        mainImg: "assets/project/ejiao/1.jpg",
        detailImgs: ["assets/project/ejiao/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/ejiao/new/index.html",
        keywords: ["东阿阿胶","养生"]
    },{
        type: 2,
        title: "五句话解锁广州国税新知识",
        desc: "国税MM说，不想当尖子生的小助手不是好朋友~",
        mainImg: "assets/project/gzguoshui/2.jpg",
        detailImgs: ["assets/project/gzguoshui/1.jpg","assets/project/gzguoshui/2.jpg","assets/project/gzguoshui/3.jpg","assets/project/gzguoshui/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/gzguoshui/index.html",
        keywords: ["广州","国税","知识"]
    },{
        type: 2,
        title: "斗门区政府工作报告",
        desc: "斗门区政府工作报告。",
        mainImg: "assets/project/zhdmlh/1.jpg",
        detailImgs: ["assets/project/zhdmlh/1.jpg","assets/project/zhdmlh/2.jpg","assets/project/zhdmlh/3.jpg","assets/project/zhdmlh/4.jpg","assets/project/zhdmlh/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/zhdmlh/index.html",
        keywords: ["斗门","政府","报告"]
    },{
        type: 2,
        title: "广州国税的这份考卷上头条了！",
        desc: "你能做完吗？文中有彩蛋~",
        mainImg: "assets/project/gxxfxc/1.jpg",
        detailImgs: ["assets/project/gxxfxc/1.jpg","assets/project/gxxfxc/2.jpg","assets/project/gxxfxc/3.jpg","assets/project/gxxfxc/4.jpg","assets/project/gxxfxc/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/gxxfxc/index.html",
        keywords: ["广州","国税","考卷"]
    },{
        type: 2,
        title: "我挑战了三关终于拿到了一块金牌，你也来试试？",
        desc: "千张优惠券，更有iwatch等大奖拿！速来！",
        mainImg: "assets/project/qmyd/1.jpg",
        detailImgs: ["assets/project/qmyd/1.jpg","assets/project/qmyd/2.jpg","assets/project/qmyd/3.jpg","assets/project/qmyd/4.jpg"],
        url: "http://gd.sina.com.cn/m/2016/huaxia/qmyd/index.html",
        keywords: ["华夏","运动","小游戏"]
    },{
        type: 2,
        title: "一块钱，一起来，公益其实并不贵",
        desc: "一块钱，一起来，公益其实并不贵。",
        mainImg: "assets/project/donation/1.jpg",
        detailImgs: ["assets/project/donation/1.jpg","assets/project/donation/2.jpg","assets/project/donation/3.jpg","assets/project/donation/4.jpg","assets/project/donation/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/huaxia/donation/index.html",
        keywords: ["华夏","一块","公益"]
    },{
        type: 1,
        title: "全球产品跨界创新中心建设启动仪式",
        desc: "创聚南海,商行全球。全球产品跨界创新中心建设启动仪式。",
        mainImg: "assets/project/cjnh/1.jpg",
        detailImgs: ["assets/project/cjnh/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/cjnh/index.html",
        keywords: ["创新","南海","建设"]
    },{
        type: 2,
        title: "增城菜心王子修炼手册",
        desc: "菜心王子带你玩转增城菜心美食节。",
        mainImg: "assets/project/caixin/1.jpg",
        detailImgs: ["assets/project/caixin/1.jpg","assets/project/caixin/2.jpg","assets/project/caixin/3.jpg","assets/project/caixin/4.jpg","assets/project/caixin/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/caixin/index.html",
        keywords: ["增城","文化菜心"]
    },{
        type: 1,
        title: "经济活力看广东",
        desc: "本次活动以广东扎实推进“供给侧结构性改革”为主题，邀请中央新闻网站、主要商业网站、自媒体大号、国内知名财经媒体、网络名人、省内网络媒体和主流媒体以及新浪财经专家组组成采风团，分别深入广州、佛山、中山、江门等地，通过领导见面交流会、深入企业参观考察，探访本地区去产能、去库存、去杠杆、降成本、补短板的经验做法，深入展现广东经济发展良好前景，稳预期、鼓干劲、增信心。",
        mainImg: "assets/project/jjhlkgd/1.jpg",
        detailImgs: ["assets/project/jjhlkgd/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/jjhlkgd/new/index.html",
        keywords: ["经济活力","广东"]
    },{
        type: 1,
        title: "歌诗达邮轮",
        desc: "舌尖上的奇妙旅程，畅享168道饕餮美味！歌诗达邮轮维多利亚号1月23日广州盛大启航",
        mainImg: "assets/project/geshida/1.jpg",
        detailImgs: ["assets/project/geshida/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2017/geshida/index.html",
        keywords: ["歌诗达","邮轮"]
    },{
        type: 1,
        title: "买车险选人保",
        desc: "万家服务网点，人保相伴左右；何时何地出险，人保快速响应；人保全天候服务，全方位保障；专业服务，为您省时省力省心",
        mainImg: "assets/project/rbzx/1.jpg",
        detailImgs: ["assets/project/rbzx/2.jpg","assets/project/rbzx/3.jpg"],
        url: "http://gd.sina.com.cn/zt/2016/renbao/chexian/index.html",
        keywords: ["人保","车险"]
    },{
        type: 2,
        title: "人保暖冬食汤圆h5小游戏",
        desc: "冬至快乐！暖冬食汤圆，和我比赛赢取人保送出的保温杯",
        mainImg: "assets/project/rbdz/4.jpg",
        detailImgs: ["assets/project/rbdz/1.jpg","assets/project/rbdz/2.jpg","assets/project/rbdz/3.jpg","assets/project/rbdz/4.jpg","assets/project/rbdz/5.jpg"],
        url: "http://gd.sina.com.cn/m/2016/picc/dongzhi/index.shtml",
        keywords: ["人保","冬至","小游戏"]
    },{
        type: 2, 
        title: "广府庙会相约幸福主题h5",
        desc: "2017广府庙会，晒庙会海报，赢丰富奖品！",
        mainImg: "assets/project/miaohui/1.jpg",
        detailImgs: ["assets/project/miaohui/1.jpg","assets/project/miaohui/2.jpg","assets/project/miaohui/3.jpg","assets/project/miaohui/4.jpg"],
        url: "http://gd.sina.com.cn/m/2017/gfmh/index.html",
        keywords: ["广府庙会","海报"]
    },{
        type: 1,
        title: "寻找广东最美家庭",
        desc: "为认真贯彻落实“注重家庭、注重家教、注重家风”的重要指示精神，省委宣传部、省文明办、省妇联联合开展2017年广东寻找“最美家庭”系列活动。",
        mainImg: "assets/project/fulian/1.jpg",
        detailImgs: ["assets/project/fulian/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2017/fulian/index.html",
        keywords: ["妇联","最美家庭"]
    },{
        type: 2,
        title: "广州人保直升机救援服务“空袭”广州",
        desc: "试飞体验官等你来当",
        mainImg: "assets/project/rbzsj/2.jpg",
        detailImgs: ["assets/project/rbzsj/1.jpg","assets/project/rbzsj/2.jpg","assets/project/rbzsj/3.jpg","assets/project/rbzsj/4.jpg","assets/project/rbzsj/5.jpg","assets/project/rbzsj/6.jpg"],
        url: "http://gd.sina.com.cn/m/2017/picc-rescue/index.html",
        keywords: ["picc","直升机"]
    },{
        type: 2,
        title: "2017微博同城广东天气政务V峰会邀请函",
        desc: "汇聚广东V力量 打造微博生态圈 广州同城#广州V峰会#就少你一个网红了!",
        mainImg: "assets/project/tqfh/1.jpg",
        detailImgs: ["assets/project/tqfh/1.jpg","assets/project/tqfh/2.jpg","assets/project/tqfh/3.jpg","assets/project/tqfh/4.jpg","assets/project/tqfh/5.jpg"],
        url: "http://gd.sina.com.cn/m/2017/weathersummit/index.shtml",
        keywords: ["微博同城","天气"]
    },{
        type: 2,
        title: "电亮责任每一度",
        desc: "中国南方电网公司2016年企业社会责任报告",
        mainImg: "assets/project/nanwang/1.jpg",
        detailImgs: ["assets/project/nanwang/1.jpg","assets/project/nanwang/2.jpg","assets/project/nanwang/3.jpg","assets/project/nanwang/4.jpg","assets/project/nanwang/5.jpg","assets/project/nanwang/6.jpg"],
        url: "http://gd.sina.com.cn/m/20170505/index.shtml",
        keywords: ["南网","2016","报告"]
    },{
        type: 2,
        title: "六一需警惕！这些熊孩子闯的祸可不是玩笑！",
        desc: "PICC《熊孩子日报》六一特辑",
        mainImg: "assets/project/61xhz/0.jpg",
        detailImgs: ["assets/project/61xhz/1.jpg","assets/project/61xhz/2.jpg"],
        url: "http://gd.sina.com.cn/m/2017/renbao/61/index.html",
        keywords: ["PICC","六一","熊孩子"]
    },{
        type: 2,
        title: "百万鲜花致敬全城母亲，给妈妈的礼物我来送",
        desc: "今年母亲节你一定要参加的活动",
        mainImg: "assets/project/bmxh/1.jpg",
        detailImgs: ["assets/project/bmxh/1.jpg","assets/project/bmxh/2.jpg","assets/project/bmxh/3.jpg","assets/project/bmxh/4.jpg","assets/project/bmxh/5.jpg","assets/project/bmxh/6.jpg","assets/project/bmxh/7.jpg"],
        url: "http://gd.sina.com.cn/m/2017/mothersday/index.shtml",
        keywords: ["母亲节","鲜花"]
    },{
        type: 2,
        title: "你对妈妈的了解值多少分",
        desc: "你对妈妈的了解程度是多少分呢！快来参加测试，为妈妈赢取定制鲜花吧",
        mainImg: "assets/project/mqjwd/1.jpg",
        detailImgs: ["assets/project/mqjwd/1.jpg","assets/project/mqjwd/2.jpg","assets/project/mqjwd/3.jpg","assets/project/mqjwd/4.jpg"],
        url: "http://gd.sina.com.cn/m/2017/motherday-answer/index.html",
        keywords: ["母亲","测试","鲜花"]
    },{
        type: 1,
        title: "全新奥迪A4L南方车型 钜惠肆意来袭",
        desc: "置换的旧车残值高于新车最低首付20%以上，即可实现“0”首付，享18期0利率。",
        mainImg: "assets/project/audi/1.jpg",
        detailImgs: ["assets/project/audi/2.jpg","assets/project/audi/3.jpg"],
        url: "http://gd.sina.com.cn/zt/2017/audi/index.shtml",
        keywords: ["奥迪A4L","适配"]
    },{
        type: 2,
        title: "新浪广东2017招聘h5",
        desc: "来新浪广东，和有爱的小伙伴一起鸡鸡向上",
        mainImg: "assets/project/sinajob/1.jpg",
        detailImgs: ["assets/project/sinajob/1.jpg","assets/project/sinajob/2.jpg","assets/project/sinajob/3.jpg","assets/project/sinajob/4.jpg","assets/project/sinajob/5.jpg","assets/project/sinajob/6.jpg","assets/project/sinajob/7.jpg","assets/project/sinajob/8.jpg","assets/project/sinajob/9.jpg","assets/project/sinajob/10.jpg"],
        url: "http://gd.sina.com.cn/m/2017/gdsinajobs/index.shtml",
        keywords: ["新浪","2017","招聘"]
    },{
        type: 2,
        title: "遇上，对的人在一起",
        desc: "遇上，对的人在一起，在一起，走得更远。",
        mainImg: "assets/project/gdsinastory/4.jpg",
        detailImgs: ["assets/project/gdsinastory/1.jpg","assets/project/gdsinastory/2.jpg","assets/project/gdsinastory/3.jpg","assets/project/gdsinastory/4.jpg","assets/project/gdsinastory/5.jpg"],
        url: "http://gd.sina.com.cn/m/2017/gdsinastory/index.shtml",
        keywords: ["对的人","在一起"]
    },{
        type: 2,
        title: "微博房产",
        desc: "从过去到现在，每个新生事物在你的“围观”下衍生更多可能，这一次微博房产邀您围观，共同开启房产发现之旅",
        mainImg: "assets/project/wbhouse/1.jpg",
        detailImgs: ["assets/project/wbhouse/1.jpg","assets/project/wbhouse/2.jpg","assets/project/wbhouse/3.jpg","assets/project/wbhouse/4.jpg","assets/project/wbhouse/5.jpg","assets/project/wbhouse/6.jpg"],
        url: "http://gd.sina.com.cn/m/2017/weibofangchan/index.html",
        keywords: ["微博房产","房产"]
    },{
        type: 2,
        title: "跑步黑话有奖竞答开赛每个工作日200元现金等你拿",
        desc: "广州热跑团教你学说江湖话，伪装马拉松老司机",
        mainImg: "assets/project/repao2017/1.jpg",
        detailImgs: ["assets/project/repao2017/1.jpg","assets/project/repao2017/2.jpg","assets/project/repao2017/3.jpg","assets/project/repao2017/4.jpg"],
        url: "http://gd.sina.com.cn/m/2017/repao/index.html",
        keywords: ["热跑团","有奖竞答"]
    },{
        type: 2,
        title: "小啤汽签到",
        desc: "小啤汽签到兑换奖品",
        mainImg: "assets/project/xiaopiqi/1.jpg",
        detailImgs: ["assets/project/xiaopiqi/1.jpg","assets/project/xiaopiqi/2.jpg","assets/project/xiaopiqi/3.jpg","assets/project/xiaopiqi/4.jpg"],
        url: "http://gd.sina.com.cn/m/xpqdk/index.shtml",
        keywords: ["公众号","签到"]
    },{
        type: 1,
        title: "一起来劲",
        desc: "全新劲客，劲酷上市",
        mainImg: "assets/project/jingke/1.jpg",
        detailImgs: ["assets/project/jingke/2.jpg"],
        url: "http://gd.sina.com.cn/zt/2017/nission/index.shtml",
        keywords: ["东风日产","劲客"]
    }];






