import{u as t,o as e,c as s,w as i,a as o,n as l,i as r,b as a,d as n,s as u,e as c,r as d,f as h,g as m,h as k,F as f,j as w,S as C,t as g,k as p}from"./index-C_5wFGwd.js";import{_ as b,r as S}from"./uni-app.es.CU_O42Ri.js";var q;const _=b(((e="IZoomOut",s)=>({name:e,components:{},props:{size:{type:[String,Number],default:18,desc:"图标的大小，即宽高的值"},strokeWidth:{type:[String,Number],default:4,desc:"线条宽度"},theme:{type:String,default:"outline",validator:t=>["outline","filled","two-tone","multi-color"].includes(t)},strokeLinecap:{type:String,default:"round",validator:t=>["butt","round","square"].includes(t),desc:"描边端点类型"},strokeLinejoin:{type:String,default:"round",validator:t=>["miter","round","bevel"].includes(t),desc:"描边连接类型"},fill:{type:[String,Array],default:"#000000"}},data:()=>({png:"",rtl:!1,isShow:!0,colors1:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"}),computed:{fillColor(){return"string"==typeof this.fill?[this.fill]:this.fill||[]},outStrokeColor(){return"string"==typeof this.fillColor[0]?this.fillColor[0]:"currentColor"},outFillColor(){return"string"==typeof this.fillColor[1]?this.fillColor[1]:"currentColor"},innerStrokeColor(){return"string"==typeof this.fillColor[2]?this.fillColor[2]:this.colors1.multiColor.innerStrokeColor},innerFillColor(){return"string"==typeof this.fillColor[3]?this.fillColor[3]:this.colors1.multiColor.innerFillColor},sizeWithUnit(){let e=this.size+"";return/\d$/.test(this.size)?e=this.size+"px":e.endsWith("rpx")&&(e=t(parseInt(e))+"px"),e},colors(){return this[{outline:"outline",filled:"filled","two-tone":"twoTone","multi-color":"multi"}[this.theme]]()},boxStyle(){return{width:this.sizeWithUnit,height:this.sizeWithUnit}},url(){return"data:image/svg+xml,"+encodeURIComponent(this.url11)},url11(){return s(this)}},mounted(){console.log("==== this :",this._uid)},methods:{changeMessage(t){t.detail.data[0].isInitialize?this.$refs[this._uid].evalJS("onReceiveSvg('"+this.url11+"')"):(this.png=t.detail.data[0].png,this.isShow=!1)},multi(){return[this.outStrokeColor,this.outFillColor,this.innerStrokeColor,this.innerFillColor]},twoTone(){return[this.outStrokeColor,this.outFillColor,this.outStrokeColor,this.outFillColor]},filled(){return[this.outStrokeColor,this.outStrokeColor,"#FFF","#FFF"]},outline(){return[this.outStrokeColor,"none",this.outStrokeColor,"none"]}}}))("i-camera",(q=t=>'<?xml version="1.0" encoding="UTF-8"?><svg width="'+t.sizeWithUnit+'" height="'+t.sizeWithUnit+'" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12L18 6H30L33 12H15Z" fill="'+t.colors[1]+'" stroke="'+t.colors[0]+'" stroke-width="'+t.strokeWidth+'" stroke-linejoin="'+t.strokeLinejoin+'"/><rect x="4" y="12" width="40" height="30" rx="3" fill="'+t.colors[1]+'" stroke="'+t.colors[0]+'" stroke-width="'+t.strokeWidth+'" stroke-linejoin="'+t.strokeLinejoin+'"/><path d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z" fill="'+t.colors[3]+'" stroke="'+t.colors[2]+'" stroke-width="'+t.strokeWidth+'" stroke-linejoin="'+t.strokeLinejoin+'"/></svg>',t=>q(t))),[["render",function(t,n,u,c,d,h){const m=r,k=a;return e(),s(k,{class:"a-icon-svg",style:l([t.boxStyle])},{default:i((()=>[o(m,{class:"a-icon-pack-image",src:t.url,mode:"aspectFit"},null,8,["src"])])),_:1},8,["style"])}],["__scopeId","data-v-3ac5f444"]]),L=[{questionTitle:"手脚、身体发凉怕冷，还是发热冒汗？",answerList:[{answer:"冷",attribute:"YaX",mark:.5},{answer:"热",attribute:"YiX",mark:.25},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"容易腹泻、拉肚子，还是便秘、大便干燥？",answerList:[{answer:"拉肚子",attribute:"YaX",mark:.5},{answer:"干燥",attribute:"YiX",mark:.25},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"脸、口舌、眼睛干，还是油？",answerList:[{answer:"干",attribute:"YiX",mark:.25},{answer:"油",attribute:"TS",mark:.2},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"口唇和面颊比一般人潮红、还是面色晦暗？",answerList:[{answer:"潮红",attribute:"YiX",mark:.25},{answer:"晦暗",attribute:"XY",mark:.2},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"感到胸闷或腹部胀满、感到身体沉重不轻松或不爽快、腹部肥满松软？嘴里黏黏、平时痰多，咽喉部有痰堵着、舌苔厚腻？",answerList:[{answer:"完全符合",attribute:"TS",mark:.8},{answer:"准确",attribute:"TS",mark:.52},{answer:"有点",attribute:"TS",mark:.26},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"容易长痤疮、疮疖？口苦口臭、大便黏滞解不尽、小便尿道发热尿色浓深、带下色黄、阴囊潮湿？",answerList:[{answer:"完全符合",attribute:"SR",mark:1},{answer:"准确",attribute:"SR",mark:.66},{answer:"有点",attribute:"SR",mark:.33},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"感到闷闷不乐、情绪低沉、精神紧张、焦虑不安、多愁善感、感情脆弱、容易害怕或受到惊吓、无缘无故叹气？胁肋部或乳房胀痛、咽喉部有异物感，且吐之不出、咽之不下？",answerList:[{answer:"完全符合",attribute:"QY",mark:1},{answer:"准确",attribute:"QY",mark:.66},{answer:"有点",attribute:"QY",mark:.33},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"容易疲乏、气短、呼吸短促、心慌、容易眩晕、喜欢安静、懒得说话、说话低弱无力？出虚汗？",answerList:[{answer:"完全符合",attribute:"QX",mark:1},{answer:"准确",attribute:"QX",mark:.66},{answer:"有点",attribute:"QX",mark:.33},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"面色晦暗、褐斑、黑眼圈、健忘？皮肤容易青紫淤青?",answerList:[{answer:"完全符合",attribute:"XY",mark:.8},{answer:"准确",attribute:"XY",mark:.52},{answer:"有点",attribute:"XY",mark:.26},{answer:"无",attribute:"",mark:0}],selectedAnswer:5},{questionTitle:"没感冒也会打喷嚏、鼻塞、流鼻涕、咳喘？皮肤容易过敏、荨麻疹、风团、风疹块、风疙瘩、皮紫癜、紫红色瘀点、皮肤一抓就红有抓痕？",answerList:[{answer:"完全符合",attribute:"TB",mark:1},{answer:"准确",attribute:"TB",mark:.66},{answer:"有点",attribute:"TB",mark:.33},{answer:"无",attribute:"",mark:0}],selectedAnswer:5}];const T=b({data:()=>({title:"Hello",isItemActive:"",cameraList:[{title:"1.上传左手的照片（分析手部反射区）",photoUrl:""},{title:"2.上传舌头照片（舌诊）",photoUrl:""}],questionList:L,toView:"",multiQueItemList:[{content:"痘痘",choose:!1},{content:"掉发",choose:!1},{content:"美白",choose:!1},{content:"减肥",choose:!1},{content:"记忆力差",choose:!1},{content:"精力差",choose:!1},{content:"失眠",choose:!1},{content:"便秘",choose:!1},{content:"肠胃不好",choose:!1},{content:"月经不调",choose:!1},{content:"久备不孕",choose:!1},{content:"男科疲软",choose:!1}],questionSelected:[],multiQueSelected:[]}),onLoad(){console.log(this.questionList)},methods:{onClickItem(t){console.log(t);let e=t.currentTarget.dataset.qNum;console.log(e);let s=t.currentTarget.id,i=Number(e)+3,o={qNum:e,attribute:this.questionList[e].answerList[s].attribute,mark:this.questionList[e].answerList[s].mark};if(this.questionList[e].selectedAnswer=s,this.toView="item"+i,console.log(this.toView),0==this.questionSelected.length)this.questionSelected.push(o);else{let t=-1;for(let s=0;s<this.questionSelected.length;s++)if(Number(this.questionSelected[s].qNum)===Number(e)){t=s;break}-1!=t?this.questionSelected[t]=o:this.questionSelected.push(o)}console.log(this.questionSelected)},onConfirm(){this.questionSelected.length>=10?n({url:"../../pages/results/results?testResults="+JSON.stringify(this.questionSelected)+"&recommend="+JSON.stringify(this.multiQueSelected)}):u({title:"请完成全部问题",icon:"error",duration:2e3})},onTakePhoto(t){let e=t.currentTarget.id,s=Number(t.currentTarget.id)+1;console.log(t),c({count:1,sourceType:["camera"],success:t=>{this.cameraList[e].photoUrl=t.tempFilePaths[0],this.toView="item"+s,console.log(this.toView)},fail:t=>{console.log("没有获取图片")}})},cameraCheck(t){return 0==t||!!this.cameraList[t-1].photoUrl},questionCheck(t){return 0==t?!!this.cameraList[1].photoUrl:0!=t?5!=this.questionList[t-1].selectedAnswer:void 0},onClickMultiQ(t){this.multiQueItemList[t].choose=!this.multiQueItemList[t].choose,this.multiQueSelected=this.multiQueItemList.filter((t=>1==t.choose)),console.log(this.multiQueSelected)}}},[["render",function(t,l,n,u,c,b){const q=a,L=r,T=S(d("i-camera"),_),y=w,F=C;return e(),s(q,{class:"content"},{default:i((()=>[o(q,{class:"form"},{default:i((()=>[o(F,{"scroll-y":"false",type:"custom","scroll-into-view":c.toView,class:"scrollArea"},{default:i((()=>[o(q,null,{default:i((()=>[o(q,{class:"title"},{default:i((()=>[o(q,{class:"titleContent"},{default:i((()=>[h("仁心相伴")])),_:1}),o(q,{class:"titleSpace"}),o(q,{class:"titleIntro"},{default:i((()=>[h("最准确的中医面诊舌诊手诊体质分析系统")])),_:1})])),_:1}),o(q,{class:"warning"},{default:i((()=>[h("体质测试以当下感受为准作答，人的体质有可能会随季节变化")])),_:1}),(e(!0),m(f,null,k(c.cameraList,((t,l)=>(e(),s(q,{key:l,id:"item"+l},{default:i((()=>[b.cameraCheck(l)?(e(),s(q,{key:0,class:"cameraArea"},{default:i((()=>[o(q,{class:"cameraTitle"},{default:i((()=>[h(g(t.title),1)])),_:2},1024),o(q,{class:"camera",onClick:b.onTakePhoto,id:l},{default:i((()=>[t.photoUrl?(e(),s(L,{key:0,src:t.photoUrl,mode:"aspectFill",class:"cameraImage"},null,8,["src"])):(e(),s(T,{key:1,theme:"outline",size:"40",fill:"#5BB086",strokeWidth:2}))])),_:2},1032,["onClick","id"])])),_:2},1024)):(e(),s(q,{key:1,class:"cameraAreaDefault"},{default:i((()=>[o(q,{class:"cameraTitleDefault"},{default:i((()=>[h(g(t.title),1)])),_:2},1024)])),_:2},1024))])),_:2},1032,["id"])))),128)),(e(!0),m(f,null,k(c.questionList,((t,l)=>(e(),s(q,{key:l,id:"item"+[l+2]},{default:i((()=>[b.questionCheck(l)?(e(),s(q,{key:0,class:"question"},{default:i((()=>[o(q,{class:"questionSpace"}),o(q,{class:"qTitle"},{default:i((()=>[h(g(l+3+"."+t.questionTitle),1)])),_:2},1024),o(q,{class:"qItemContainer"},{default:i((()=>[(e(!0),m(f,null,k(t.answerList,((t,o)=>(e(),s(q,{key:o,class:p(["qItem",{active:c.questionList[l].selectedAnswer==o}]),onClick:b.onClickItem,id:o,"data-qNum":l},{default:i((()=>[h(g(t.answer),1)])),_:2},1032,["class","onClick","id","data-qNum"])))),128))])),_:2},1024)])),_:2},1024)):(e(),s(q,{key:1,class:"questionDefault"},{default:i((()=>[o(q,{class:"questionTitleDefault"},{default:i((()=>[h(g(l+3+"."+t.questionTitle),1)])),_:2},1024)])),_:2},1024))])),_:2},1032,["id"])))),128)),o(q,{id:"item14"},{default:i((()=>[b.questionCheck(10)?(e(),s(q,{key:0,class:"question"},{default:i((()=>[o(q,{class:"questionSpace"}),o(q,{class:"qTitle"},{default:i((()=>[h("【多选】请问您有以下哪些症状？")])),_:1}),o(q,{class:"multiQueItemLayout"},{default:i((()=>[(e(!0),m(f,null,k(c.multiQueItemList,((t,l)=>(e(),s(q,{class:p(["multiQueItem",{active:t.choose}]),key:l,onClick:t=>b.onClickMultiQ(l)},{default:i((()=>[o(q,null,{default:i((()=>[h(g(t.content),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1})):(e(),s(q,{key:1,class:"questionDefault"},{default:i((()=>[o(q,{class:"questionTitleDefault"},{default:i((()=>[h("【多选】请问您有以下哪些症状？")])),_:1})])),_:1}))])),_:1}),o(q,{class:"confirm",onClick:b.onConfirm},{default:i((()=>[h(" 提交测试 ")])),_:1},8,["onClick"]),o(q,{class:"end"},{default:i((()=>[o(q,{class:"announcementTitle"},{default:i((()=>[h("提交代表你已接受以下声明")])),_:1}),o(q,{class:"announcementContent"},{default:i((()=>[o(y,null,{default:i((()=>[h("本测试不作为诊断和治疗的依据\\n对于已经医生确诊的疾病，应按照医嘱积极治疗\\n所提及的内容仅作为生活保健的咨询建议\\n如遇不适请及时就医")])),_:1})])),_:1}),o(q,{class:"brandName"},{default:i((()=>[o(q,{class:"brandNameContent"},{default:i((()=>[h("仁心相伴")])),_:1})])),_:1}),o(q,{class:"slogan"},{default:i((()=>[h("陪你每天健康生活")])),_:1})])),_:1})])),_:1})])),_:1},8,["scroll-into-view"])])),_:1})])),_:1})}],["__scopeId","data-v-cff09a71"]]);export{T as default};
