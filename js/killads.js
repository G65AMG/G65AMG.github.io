

function FindProxyForURL(url, host){


    var mode = 0;


    var hosts2 = [
          "i-play.mobile.youku.com",
          "ups.youku.com"
]
    var hosts = [
//book
"70e.com",
"ad.zhangyue.com",
"api.itaoxiaoshuo.com",
"cj.qidian.com",
"drdwy.com",
"dwtrack.qidian.com",
"e701.net",
"game.qidian.com",
"jisucn.com",
"m.12306media.com",
"o.if.qidian.com",
"s1.cmfu.com",
"sanya1.com",
"stats.magicwindow.cn",
"tongji.qidian.com",
"uedas.qdmm.com",
"uedas.qidian.com",
"ut2.shuqistat.com",
"xyrkl.com",
"zhuanfakong.com",

//new
"ad.duapps.com",
"ad.player.baidu.com",
"adm.baidu.com",
"adscdn.baidu.com",
"mobads.baidu.com",
"mobads-logs.baidu.com",
"mobads-speed.baidu.com",
"ad.video.51togic.com",
"logger.baofeng.com",
"xs.houyi.baofeng.net",
"adsp.xunlei.com",
"analytics.xunlei.com",
"analytics-union.xunlei.com",
"api.tw06.xlmc.sandai.net",
"api-shoulei-ssl.xunlei.com",
"biz5.kankan.com",
"biz5.sandai.net",
"click.cm.kankan.com",
"cnt.ppmoney.com",
"cop.my.xunlei.com",
"count.cpm.cm.kankan.com",
"float.kankan.com",
"float.sandai.net",
"hezuo.down.xunlei.com",
"hezuo.downxunlei.com",
"img.momocdn.com",
"jiuwo.xunlei.com",
"kkpgv.kankan.com",
"kkpgv2.kankan.com",
"kkpgv2.xunlei.com",
"kkpgv3.xunlei.com",
"liveupdate.mac.sandai.net",
"logic.cpm.cm.kankan.com",
"logic.cpm.cm.sandai.net",
"m.down.sandai.net",
"material.ssp.xunlei.com",
"material.xl7.xunlei.com",
"msg.client.xunlei.com",
"msg2.client.xunlei.com",
"niu.ag.xldp.xunlei.com",
"niu.xunlei.com",
"pv.cnzz.leiouxiong.com",
"pv.xmp.stat.xunlei.com",
"setup.stat.v.xunlei.com",
"shoulei.downxunlei.com",
"stat.download.xunlei.com",
"static.m.sjzhushou.com",
"static2.ssp.xunlei.com",
"sys7.msg.xunlei.com",
"thunderqtypv.union.xunlei.com",
"tips.v.xunlei.com",
"tips.xmp.client.kanimg.com",
"upgrade.m.xunlei.com",
"www.155.com",
"www.6998cdn.com",
"xl7.cash.xunlei.com",
"xl7xml.client.xunlei.com",
"gug.ku6cdn.com",
"pq.stat.ku6.com",
"st.vq.ku6.cn",
"static.ku6.com",
"ads.wasu.tv",
"adsystem.wasu.tv",
"adwasu.wasu.tv",
"pb3.pstatp.com",
"ads.youtube.com",
"azabu-u.ac.jp",
"couchcoaster.jp",
"crt.comodoca.com",
"delivery.dmkt-sp.jp",
"ehg-youtube.hitbox.com",
"files.adform.net",
"gcdn.2mdn.net",
"m-78.jp",
"nichibenren.or.jp",
"nicorette.co.kr",
"s.youtube.com",
"s2.youtube.com",
"shizen-no-megumi.com",
"ssl-youtube.2cnt.net",
"youtube.112.2o7.net",
"youtube.2cnt.net",
"ads.aplus.pptv.com",
"ads.aplusapi.pptv.com",
"afp.pplive.com",
"as.aplus.pptv.com",
"asimgs.pplive.cn",
"cm.zhiziyun.com",
"de.as.pptv.com",
"gas.data.pplive.com",
"imagecache.g.pptv.com",
"img1.g.pptv.com",
"img2.g.pptv.com",
"img3.g.pptv.com",
"ins.pplive.com",
"jp.as.pptv.com",
"pp2.pptv.com",
"stat.pptv.com",
"static.g.pptv.com",
"tj.g.pptv.com",
"mfp.deliver.ifeng.com",
"stadig.ifeng.com",
"ads.cdn.tvb.com",
"btrace.video.qq.com",
"c.algovid.com",
"cc.xtgreat.com",
"d.dsp.imageter.com",
"galaxy.bjcathay.com",
"gg.jtertp.com",
"kwflvcdn.000dn.com",
"logstat.t.sfht.com",
"match.rtbidder.net",
"mp4.res.hunantv.com",
"n-st.vip.com",
"pop.uusee.com",
"shrek.6.cn",
"simba.6.cn",
"static.bshare.cn",
"static.duoshuo.com",
"t.cr-nielsen.com",
"union.6.cn",
"wxsnsdy.video.qq.com",
//<youku>
"actives.youku.com",
"ad.api.3g.tudou.com",
"ad.api.3g.youku.com",
"ad.api.mobile.youku.com",
"ad.mobile.youku.com",
"adcontrol.tudou.com",
"adplay.tudou.com",
"a-dxk.play.api.3g.youku.com",
"atm.youku.com",
"c.yes.youku.com",
"das.api.youku.com",
"das.mobile.youku.com",
"dev-push.m.youku.com",
"dl.g.youku.com",
"dressimage.img-cn-beijing.aliyuncs.com",
"e.stat.ykimg.com",
"gamex.mobile.youku.com",
"goods.tudou.com",
"guanggaoad.youku.com",
"hudong.pl.youku.com",
"hz.youku.com",
"iwstat.tudou.com",
"iyes.youku.com",
"lstat.youku.com",
"lvip.youku.com",
"m.yes.youku.com",
"mobilemsg.youku.com",
"msg.youku.com",
"myes.youku.com",
"nstat.tudou.com",
"p.l.ykimg.com",
"p.l.youku.com",
"passport-log.youku.com",
"p-log.ykimg.com",
"push.m.youku.com",
"push.m.youku.com",
"r.l.youku.com",
"s.p.youku.com",
"sdk.m.youku.com",
"smartvideo.youku.com",
"stat.tudou.com",
"stat.youku.com",
"statis.api.3g.youku.com",
"stats.tudou.com",
"store.tv.api.3g.youku.com",
"store.xl.api.3g.youku.com",
"tdrec.youku.com",
"test.ott.youku.com",
"themis.ykimg.com",
"v.l.youku.com",
"val.api.youku.com",
"wan.youku.com",
"ykatr.youku.com",
"ykrec.youku.com",


//<sohu>
"agn.aty.sohu.com",
"mmg.aty.sohu.com",
"data.vod.itc.cn",
"sohu.vod.qingcdn.com",
"sohu.vodnew.lxdns.com",
"sohutv.m.cn.miaozhen.com",
"vsohu.admaster.com.cn",
//<letv>
"ark.letv.com",
"dc.letv.com",
"n.mark.letv.com",
"letv.irs01.com",
"stat.letv.com",
"letv.allyes.com",
"dc.letv.com",
"fz.letv.com",
"plog.dc.letv.com",
"dev.dc.letv.com",
"pro.letv.com",
"pro.hoye.letv.com",
"g3.letv.com",
"minisite.letv.com",



//hunantv
"g.cn.miaozhen.com",
"x.da.hunantv.com",
"y.da.hunantv.com",
"x.da.mgtv.com",
"y.da.mgtv.com",
"mobile.da.mgtv.com",
"mobile2.da.mgtv.com",

//<baofeng>
"xs.houyi.baofeng.net",
//<hunantv>
"da.hunantv.com",
"miaozhen.com",
//<qq>
"lives.l.qq.com",
"vqq.admaster.com.cn",
"adsmind.tc.qq.com",
//<tudou>
"ad.api.3g.tudou.com",
//<pptv>
"de.as.pptv.com",
"pp2.pptv.com",
"stat.pptv.com",
"afp.pplive.com",
//<iqiyi>
"cm.passport.iqiyi.com",
"ad.m.iqiyi.com",
"cupid.iqiyi.com",
"paopao.iqiyi.com",
"ckm.iqiyi.com",
"msg.video.qiyi.com",
"msg2.video.qiyi.com",
"afp.qiyi.com",
"ckm.iqiyi.com",
"cm.passport.iqiyi.com",
"ifacelog.iqiyi.com",
"msg.video.qiyi.com",
"msg2.video.qiyi.com",
"msga.cupid.iqiyi.com",
"paopao.iqiyi.com",
"rcd.iqiyi.com",
//<google>
"2mdn.net",
"admob.com",
"doubleclick.com",
"doubleclick.net",
"googleadsserving.cn",
"googlecommerce.com",
"googletagmanager.com",
"afd.l.google.com",
"pagead-tpc.l.google.com",
"pagead.google.com",
"pagead.l.google.com",
"partnerad.l.google.com",
"pubads.g.doubleclick.net",
"googletagservices.com",
"googleadservices.com",
"ads.google.com",
"pagead-tpc.l.google.com",
"pagead.google.com",
"pagead.l.google.com",
"partnerad.l.google.com",
"pagead.googlesyndication.com",
"pagead1.googlesyndication.com",
"pagead3.googlesyndication.com",
"pagead2.googlesyndication.com",
"googleads.g.doubleclick.net",
"pubads.g.doubleclick.net",
"www.youtube.com/annotations_invideo?$xmlhttprequest",
"s.youtube.com/api/stats/",
"www.google.*/pagead$domain=youtube.com",
"www.youtube.com/[[computeEmptyGif_()]]$image",
"www.youtube.com/[[computeThumbnailUrl_(data.thumbnail)]]",
"www.youtube.com/api/stats",
"www.youtube.com/pagead",
"www.youtube.com/ptracking",
"flashtalking.com$domain=youtube.com",
"adservice.google.com",


//<baidu>
"hm.baidu.com",
"eiv.baidu.com",
"pos.baidu.com",
"cpro.baidu.com",
"cpro.baidustatic.com",
"dup.baidustatic.com",
"cbjs.baidu.com",
//sina
"sax.sina.cn",
"sax.sina.com.cn",
"api-ad.sensetime.com",
"appmonitortest.biz.weibo.com",
"vip.storage.weibo.com",
"mapi.weibo.com",
"ad.doubleclick.net",
"api.im.weibo.cn",
"weibomigucloud.cmvideo.cn",
"ads.flurry.com",
"sdkapp.uve.weibo.com",
"sdkclick.uve.weibo.com",
"wgo.mmstat.com",
"dp.im.weibo.cn",
"wbapp.uve.weibo.com",
"g.cn.miaozhen.com",
"adimg.uve.weibo.com",
"v.admaster.com.cn",
"gw.im.weibo.cn",
"gw1.im.weibo.cn",
"storage.wax.weibo.com",
"data.flurry.com",
"wapx.cmvideo.cn",
"locallimit.us.sinaimg.cn",
"aliunistore.weibo.cn",
"unistore.weibo.cn",
"upload.api.weibo.com",
"us.grid.sinaedge.com",
"tc.sinaimg.cn",
"weiboimgwx.grid.sinaedge.com",
"weiboimgwx.gslb.sinaedge.com",
"u1.img.mobile.sina.cn",
"n.sinaimg.cn",
"us.grid.sinaedge.com",
"kln.grid.sinaedge.com",
"qcloud.stage.tcdnvod.com",
"api.weibo.cn",
"tvaweibo.gslb.sinaedge.com",
//<douyin>
"sf1-ttcdn-tos.pstatp.com",
"sf3-ttcdn-tos.pstatp.com",
"sf6-ttcdn-tos.pstatp.com",
"sf3-dycdn-tos.pstatp.com",
"p9.pstatp.com",
"p98.pstatp.com",
"pb1.pstatp.com",
"gitee.com",
"p1.pstatp.com/obj";
"p3.pstatp.com/obj";
//<taobao>
"tanx.com",
"alimama.com",
"nbsdk-baichuan.alicdn.com",
"adashbc.ut.taobao.com",
"ip.taobao.com",
"adashxgc.ut.taobao.com",
"tunion-api.m.taobao.com",
//<360>
"lianmeng.360.cn",
"s.360.cn",
//<others>
"keydot.net",
"mengmob.com",
"zzzkxx.com",
"miaozhen.com",
"adsage.com",
"cocounion.com",
"admaster.com.cn",
"ipinyou.com",
"admin5.com",
"csbew.com",
"jusha.com",
"vsoon.com",
"soquair.com",
"guohead.com",
"live.chartboost.com",
"appodeal.com",
"fastapi.net",
"adsmogo.com",
"adsmogo.org",
"adsmogo.net",
"adsmogo.mobi",
"adlive.cn",
"sstc360.com",
"ad-brix.com",
"leadboltads.net",
"joyingmobi.com",
"dm.jb51.net",
"bdjs.jb51.net",
"yokaunion.com",
"adpro.cn",
"pro.cn",
"51vipedu.com",
"mobi.adsage.com",
"service.cocounion.com",
"vfs.admaster.com.cn",
"vqq.admaster.com.cn",
"cm.ipinyou.com",
"lianmeng.admin5.com",
"union.admin5.com",

"lm.admin5.com",
"de.soquair.com",
".inmobi.com",
".adsmogo.com",
".adsmogo.org",
".adsmogo.mobi",
".adsmogo.net",
".adlive.cn",

".sstc360.com",
".ad-brix.com",
".leadboltads.net"
    ]

    var IS_AD = "PROXY example.com:80";
    var IS_AD2 = "PROXY 121.40.203.232:8666";
    var IS_AD3 = "PROXY 121.40.203.232:3128";
    switch (mode){
      case 0:
          IS_NOT_AD = "DIRECT";
          break;
      case 1:
          IS_NOT_AD = FindUserProxyForURL(url, host);
          break;
    }
    for (var n = 0; n < hosts.length; n++){
        if (dnsDomainIs(host, hosts[n])){
            return IS_AD;
        }
    }
    for (var n = 0; n < hosts.length; n++){
        if  ((dnsDomainIs(host, hosts2[n])) && (shExpMatch(url, "http:*"))){
            return IS_AD2;
        }
    }

    for (var n = 0; n < rules.length; n++){
        if (shExpMatch(url, rules[n])){
            return IS_AD;
        }
    }

    return IS_NOT_AD;
}
