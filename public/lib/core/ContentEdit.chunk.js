/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{495:function(Ba,wa,r){var oa=r(0);Ba=r(88);var na=r(49);r=function(ma){function fa(){return null!==ma&&ma.apply(this,arguments)||this}Object(oa.c)(fa,ma);fa.prototype.testSelection=function(da,aa,w){return na.a.Cl(da,aa,w)};return fa}(Ba.a);wa.a=r},87:function(Ba,wa,r){function oa(pb){return Object(xa.b)(void 0,void 0,void 0,function(){var rb,tb,qb,ya,Na,Ya,ab,mb,vb,db,nb,ub,Cb,Nb,kb;return Object(xa.d)(this,function(wb){switch(wb.label){case 0:return rb=
pb.wb,tb=pb.RE,qb=pb.SE,ya=pb.bL,Na=pb.mha,Ya=pb.Yga,ab=Va.getDocument(),mb=[1],[4,Object(Ea.c)(tb,{extension:"pdf"})];case 1:return vb=wb.ca(),db=Va.la(),Cb=(ub=Ga.a).Sja,[4,vb.JC()];case 2:return nb=Cb.apply(ub,[wb.ca().xfdfString,rb]),Nb=!0,[4,ab.Rf(vb,mb,rb,Nb)];case 3:return wb.ca(),[4,ab.Dg([rb+1],Nb)];case 4:return wb.ca(),kb=db.nb().filter(function(Gb){return Gb.vL()&&Gb.PageNumber===rb}),db.If(kb,{force:!0,source:"contentEditTool"}),[4,db.cL(nb)];case 5:return wb.ca(),hb||(Va.getDocument().UM(),
Va.TM(rb),Va.re()),aa(rb),Ya||Na||(ba(rb,qb.galleys,ya,Na),ba(rb,qb.objects,ya,Na)),[2]}})})}function na(pb){if(pb)return ma(pb.contents);Object(Oa.g)("Unable to extract document content")}function ma(pb){pb=(new DOMParser).parseFromString(pb,"text/html").documentElement.querySelector("body");pb.querySelectorAll("p").forEach(function(rb){rb.querySelectorAll("span").forEach(function(ya){var Na=ya.getAttribute("style");Na=fa(Na,ya.innerHTML);ya.innerHTML=Na});var tb=rb.getAttribute("style"),qb=rb.innerHTML.replaceAll("<br>",
"");rb.innerHTML=fa(tb,qb)});return pb.innerHTML.trim()}function fa(pb,rb){if(null===pb||void 0===pb?0:pb.includes("bold"))rb="<strong>"+rb+"</strong>";if(null===pb||void 0===pb?0:pb.includes("italic"))rb="<em>"+rb+"</em>";if((null===pb||void 0===pb?0:pb.includes("underline:1;"))||(null===pb||void 0===pb?0:pb.includes("text-decoration: underline")))rb="<u>"+rb+"</u>";return rb}function da(pb){if(["STRONG","EM","U"].includes(pb.tagName)&&null!==pb.getAttribute("style")){var rb=document.createElement("span"),
tb=pb.style.color;tb=ca(tb);rb.setAttribute("style","color:"+tb);pb.removeAttribute("style");rb.innerHTML=pb.innerHTML;pb.innerHTML="";pb.appendChild(rb)}else"SPAN"===pb.tagName&&null!==pb.getAttribute("style")?(tb=pb.style.color,tb=ca(tb),pb.setAttribute("style","color:"+tb)):"A"===pb.tagName&&pb.removeAttribute("style")}function aa(pb){var rb=Va.la(),tb=rb.nb().filter(function(qb){return qb.Re()&&qb.PageNumber===pb});rb.If(tb,{force:!0,source:"contentEditTool"})}function w(pb,rb){rb.forEach(function(tb){Ia[pb]||
(Ia[pb]=[]);Ia[pb].find(function(qb){return qb.id===tb.id})||Ia[pb].push(tb)})}function y(pb,rb){rb.forEach(function(tb){Xa[pb]||(Xa[pb]=[]);Xa[pb].find(function(qb){return qb.id===tb.id})||Xa[pb].push(tb)})}function h(pb,rb,tb,qb){return Object(xa.b)(void 0,void 0,void 0,function(){var ya,Na,Ya,ab,mb,vb,db,nb,ub,Cb,Nb,kb,wb,Gb,Mb,Sb,Rb,Zb;return Object(xa.d)(this,function(za){switch(za.label){case 0:if(!pb)return[2];ya=rb.replaceAll("<p><br></p>","");Na=a(ya);Na=Na.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,
"$1");Na=Na.replace(/<span class="ql-cursor">(.*?)<\/span>/g,"");Ya=pb.ff.id;ab=pb.PageNumber;mb=Ra[ab];vb=mb.galleys.find(function(hc){return hc.id===Ya});db=ma(vb.contents);nb=ja(ab,mb,db,Na,Ya);if(""===nb)return[3,2];ub=new TextEncoder;Cb=ub.encode(nb);Nb=Cb.buffer;kb=Object(Ja.c)()||"https://www.pdftron.com/webfonts/v2/";wb=Va.getDocument();return[4,wb.be([ab])];case 1:return Gb=za.ca(),ub=new TextEncoder,Mb=ub.encode(""),Sb=Mb.buffer,Sa.postMessage({cmd:"importText",pdfFile:Gb,pageNumber:ab,
webFontURL:kb,galleyId:Ya,importData:Nb,tableData:Sb,isSearchReplace:tb,callbackMapId:qb},[Nb,Sb]),Rb={},vb&&(Zb=vb.galleyBox,Rb={top:Zb.top,left:Zb.left,bottom:Zb.bottom,right:Zb.right}),Object(Da.w)(db,Na,Rb),[3,3];case 2:Object(Oa.g)("Unable to generate import XML"),za.label=3;case 3:return[2]}})})}function a(pb){var rb=new DOMParser,tb=rb.parseFromString(pb,"text/xml");tb.querySelector("parsererror")&&(tb=rb.parseFromString("<Root>"+pb+"</Root>","text/xml"));tb.querySelectorAll("a").forEach(function(qb){var ya=
qb.childNodes[0];Array.from(qb.querySelectorAll("*")).find(function(Na){return"u"===Na.tagName.toLowerCase()})||(qb=document.createElement("u"),ya.after(qb),qb.appendChild(ya))});return(new XMLSerializer).serializeToString(tb)}function b(pb,rb,tb){return Object(xa.b)(void 0,void 0,void 0,function(){var qb,ya,Na,Ya;return Object(xa.d)(this,function(ab){switch(ab.label){case 0:return aa(rb),Xa[rb]=[],Ia[rb]=[],[4,pb.be([rb])];case 1:return qb=ab.ca(),ya=new TextEncoder,Na=ya.encode(""),Ya=Na.buffer,
Sa.postMessage({cmd:"exportFile",pageNumber:rb,performExport:tb,pdfFile:qb,tableData:Ya},[qb,Ya]),[2]}})})}function e(pb){return Object(xa.b)(void 0,void 0,void 0,function(){return Object(xa.d)(this,function(){sb||(Va=pb,sb=new Promise(function(rb,tb){var qb=window.Core.ContentEdit.getWorkerPath(),ya=window.Core.ContentEdit.getResourcePath();Sa=new Worker(qb+"InfixServerModule.js");Sa.onmessage=function(Na){ha(Na,rb,tb)};Sa.postMessage({cmd:"isReady",resourcePath:ya})}));return[2,sb]})})}function f(pb,
rb,tb,qb){this.top=pb;this.left=rb;this.bottom=tb;this.right=qb;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-this.left)};this.JS=function(ya){return this.topVal()!==ya.topVal()||this.leftVal()!==ya.leftVal()||
this.bottomVal()!==ya.bottomVal()||this.rightVal()!==ya.rightVal()}}function n(pb,rb,tb,qb,ya){this.id=pb;this.pagenum=rb;this.galleysContents=tb;this.contents=qb;this.galleyBox=ya;Object(Da.v)(Xa)}function z(pb,rb,tb,qb){this.id=rb;this.type=pb;this.bbox=tb;this.pagenum=qb}function x(pb,rb,tb,qb,ya){this.id=pb;this.pagecount=rb;this.pageBBox=tb;this.galleys=qb;this.objects=ya}function ea(pb,rb){this.family=pb;this.variations=rb}function ja(pb,rb,tb,qb,ya){var Na=[],Ya=[];(new DOMParser).parseFromString(qb,
"text/html").documentElement.querySelectorAll("p").forEach(function(nb,ub){Na[ub]=nb.innerHTML;Ya[ub]={fontSize:nb.style.fontSize,fontFamily:nb.style.fontFamily,color:ca(nb.style.color)}});tb=(new DOMParser).parseFromString(tb,"text/html");var ab=null;tb.documentElement.querySelectorAll("p").forEach(function(nb,ub){if(ub<Na.length){var Cb=(new DOMParser).parseFromString(Na[ub],"text/html").documentElement.querySelector("body");Cb.childNodes.forEach(function(kb){da(kb)});nb.innerHTML=Cb.innerHTML;
ab=nb.getAttribute("style");Cb=Ya[ub].fontSize?Ya[ub].fontSize:nb.style.fontSize;var Nb=Ya[ub].fontFamily?Ya[ub].fontFamily.replace(/\s+/g,"").replace(/['"]+/g,""):nb.style.fontFamily;ub=Ya[ub].color?Ya[ub].color:null;ab=ab.replace(/(font:.*?;)/i,"font:normal normal "+Cb+" "+Nb+";");ab=ab.replace("Italic","");ab=ab.replace("underline:1;","underline:0;");ab=ab.replace("text-decoration: underline;","text-decoration: none;");ub&&(ab=ab.replace(/(color:.*?;)/i,"color:"+ub+";"));nb.setAttribute("style",
ab)}else nb.remove()});for(qb=tb.documentElement.querySelectorAll("p").length;qb<Na.length;qb++){var mb=document.createElement("p");mb.setAttribute("id","0");var vb=(new DOMParser).parseFromString(Na[qb],"text/html").documentElement.querySelector("body");vb.childNodes.forEach(function(nb){da(nb)});mb.innerHTML=vb.innerHTML;null!=ab&&mb.setAttribute("style",ab);tb.documentElement.querySelector("body").appendChild(mb)}tb=tb.documentElement.querySelector("body").innerHTML;var db="";Xa[pb].forEach(function(nb){nb.id===
ya&&(db=nb)});if(""===db)return"";rb="<DOC id='"+rb.id+"' pagecount='"+rb.pagecount+"'>";rb=rb+("<STORY galley_ids='"+ya+"' pagenum='"+pb+"'><galleys>")+(db.galleysContents+"</galleys>");db.contents=tb;rb=rb+tb+"\n</STORY>";return rb+="</DOC>"}function ca(pb){return pb.startsWith("rgb(")?"#"+pb.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"").split(",").map(function(rb){return("00"+parseInt(rb,10).toString(16)).slice(-2)}).join(""):pb}function ba(pb,rb,tb,qb){var ya=[],Na=Va.getDocument(),Ya=null;rb.forEach(function(ab){if(ab instanceof
z){var mb=Na.po(pb,ab.bbox.leftVal(),ab.bbox.topVal());var vb=mb.x;var db=mb.y;var nb=Na.po(pb,ab.bbox.rightVal(),ab.bbox.bottomVal());mb=nb.x;nb=nb.y}else if(ab instanceof n)mb=Na.po(pb,ab.galleyBox.leftVal(),ab.galleyBox.topVal()),vb=mb.x,db=mb.y,nb=Na.po(pb,ab.galleyBox.rightVal(),ab.galleyBox.bottomVal()),mb=nb.x,nb=nb.y;else return;var ub=new window.Core.Annotations.RectangleAnnotation,Cb=Qa.a.OBJECT;ab instanceof n&&(Cb=Qa.a.TEXT);ub.Fma(ab,Cb);ub.PageNumber=ab.pagenum;ub.X=vb;ub.Y=db;ub.Width=
mb-vb;ub.Height=nb-db;ub.StrokeColor=new Ha.a("#3183C8");ub.FillColor=new Ha.a(255,255,255,.01);ub.Style="dash";ub.Dashes="4,3";if(jb||qb)ub.NoView=!0,ub.Listable=!1;ub.Gw();ub.selectionModel=Aa.a;ya.push(ub);"undefined"!==typeof tb&&tb===ab.id&&(Ya=ub)});rb=Va.la();rb.Xg(ya);!Ya||jb||qb||rb.Yf(Ya);rb.le(ya)}function ha(pb,rb,tb){return Object(xa.b)(this,void 0,void 0,function(){var qb,ya,Na,Ya,ab,mb,vb,db,nb,ub;return Object(xa.d)(this,function(Cb){switch(Cb.label){case 0:qb=pb.data;Na=qb.cmd;switch(Na){case "isReady":return[3,
1];case "initialiseInfixServer":return[3,3];case "loadAvailableFonts":return[3,4];case "exportFile":return[3,5];case "insertNewTextBox":return[3,6];case "importText":return[3,7];case "transformObject":return[3,7];case "alignParagraph":return[3,7];case "deleteObject":return[3,8];case "insertImage":return[3,9]}return[3,10];case 1:return[4,Object(La.b)()];case 2:return Ya=Cb.ca(),Sa.postMessage({cmd:"initialiseInfixServer",l:Ya}),[3,10];case 3:return(ab=ia(qb.resultsXML))?(rb(),mb=Object(Ja.c)()||"https://www.pdftron.com/webfonts/v2/",
Sa.postMessage({cmd:"loadAvailableFonts",webFontURL:mb})):tb("License key does not have content edit permission"),[3,10];case 4:return sa(qb.resultsXML),[3,10];case 5:return qb.exportPerformed?ka(qb.pageNumber,qb.exportXML,qb.objectXML,qb.resultsXML):(ya=Ra[qb.pageNumber],y(qb.pageNumber,ya.galleys),w(qb.pageNumber,ya.objects),aa(qb.pageNumber),ba(qb.pageNumber,ya.galleys),ba(qb.pageNumber,ya.objects)),bb.resolve(),cb&&cb[qb.pageNumber]&&cb[qb.pageNumber].resolve(),[3,10];case 6:return la(qb.pageNumber,
qb.exportXML,qb.contentHTML),ya=Ra[qb.pageNumber],oa({wb:qb.pageNumber,RE:qb.pdfBuffer,SE:ya,bL:qb.id}),[3,10];case 7:ya=Ra[qb.pageNumber];ua(qb.pageNumber,qb.resultsXML);oa({wb:qb.pageNumber,RE:qb.pdfBuffer,SE:ya,bL:qb.id,mha:qb.isSearchReplace});vb=qb.isSearchReplace;db=qb.callbackMapId;if(vb&&db&&Ab[db])Ab[db]();return[3,10];case 8:return ya=Ra[qb.pageNumber],ua(qb.pageNumber,qb.resultsXML),ya.galleys=ya.galleys.filter(function(Nb){return Nb.id!==qb.id}),ya.objects=ya.objects.filter(function(Nb){return Nb.id!==
qb.id}),nb={wb:qb.pageNumber,RE:qb.pdfBuffer,SE:ya},oa(nb),[3,10];case 9:return ya=Ra[qb.pageNumber],ua(qb.pageNumber,qb.resultsXML),ub={wb:qb.pageNumber,RE:qb.pdfBuffer,SE:ya,bL:qb.isText,Yga:!0},oa(ub),[3,10];case 10:return[2]}})})}function ia(pb){pb=new Uint8Array(pb);var rb=(new TextDecoder("utf-8")).decode(pb);pb=!1;rb=(new DOMParser).parseFromString(rb,"text/xml").getElementsByTagName("LicenseCheck");null!==rb&&0<rb.length&&(rb=rb[0].getElementsByTagName("Status")[0].innerHTML,"error"!==rb&&
"ok"===rb&&(pb=!0));return pb}function la(pb,rb){rb=(new TextDecoder("utf-8")).decode(rb);rb=(new DOMParser).parseFromString(rb,"text/xml").getElementsByTagName("STORY");var tb=Array.prototype.slice.call(rb)[0];rb=tb.getAttribute("galley_ids");var qb=Array.prototype.slice.call(tb.getElementsByTagName("g"))[0],ya=qb.getAttribute("bbox").split(" ");ya=new f(parseFloat(ya[0]),parseFloat(ya[1]),parseFloat(ya[2]),parseFloat(ya[3]));qb=qb.innerHTML;var Na=Array.prototype.slice.call(tb.getElementsByTagName("galleys"))[0];
Na.parentNode.removeChild(Na);tb=ra(tb.innerHTML).trim();rb=new n(rb,pb,qb,tb,ya);tb=Ra[pb];ya=tb.galleys;ya.push(rb);tb.galleys=ya;Ra[pb]=tb;y(pb,tb.galleys);w(pb,tb.objects);aa(pb);ba(pb,tb.galleys);ba(pb,tb.objects)}function ka(pb,rb,tb,qb){var ya=new Uint8Array(rb),Na=new TextDecoder("utf-8");rb=Na.decode(ya);ya=new Uint8Array(tb);tb=Na.decode(ya);ya=new Uint8Array(qb);qb=Na.decode(ya);Ra[pb]=pa(pb,rb,tb,qb);qb=Ra[pb];y(pb,qb.galleys);w(pb,qb.objects);aa(pb);ba(pb,qb.galleys);ba(pb,qb.objects)}
function qa(pb,rb){pb=parseFloat(pb);return isNaN(rb)||rb<pb?pb:rb}function pa(pb,rb,tb,qb){var ya;var Na=new DOMParser;qb=Na.parseFromString(qb,"text/xml");Array.prototype.slice.call(qb.getElementsByTagName("BBox")).forEach(function(mb){if("CropBox"===mb.getAttribute("Name")){var vb=parseFloat(mb.getElementsByTagName("Top").item(0).innerHTML),db=parseFloat(mb.getElementsByTagName("Bottom").item(0).innerHTML),nb=parseFloat(mb.getElementsByTagName("Left").item(0).innerHTML);mb=parseFloat(mb.getElementsByTagName("Right").item(0).innerHTML);
ya=new f(vb,nb,db,mb)}});Na=new DOMParser;qb=Na.parseFromString(rb,"text/xml");var Ya=[];Array.prototype.slice.call(qb.getElementsByTagName("STORY")).forEach(function(mb){var vb=mb.getAttribute("galley_ids"),db=Array.prototype.slice.call(mb.getElementsByTagName("g"))[0],nb=db.getAttribute("bbox").split(" ");nb=new f(parseFloat(nb[0]),parseFloat(nb[1]),parseFloat(nb[2]),parseFloat(nb[3]));db=db.innerHTML;var ub=Array.prototype.slice.call(mb.getElementsByTagName("galleys"))[0];ub.parentNode.removeChild(ub);
mb=ra(mb.innerHTML).trim();vb=new n(vb,pb,db,mb,nb);Ya.push(vb)});Na=new DOMParser;var ab=[];rb=Na.parseFromString(tb,"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(rb).forEach(function(mb){var vb=mb.getAttribute("Type"),db=mb.getAttribute("OID");mb=Array.prototype.slice.call(mb.getElementsByTagName("Point"));var nb=Number.NaN,ub=Number.NaN,Cb=Number.NaN,Nb=Number.NaN;mb.forEach(function(kb){var wb=kb.getAttribute("Name");"TL"===wb?(nb=qa(kb.getAttribute("Y"),nb),Cb=qa(kb.getAttribute("X"),
Cb)):"TR"===wb?(nb=qa(kb.getAttribute("Y"),nb),Nb=qa(kb.getAttribute("X"),Nb)):"BR"===wb?(ub=qa(kb.getAttribute("Y"),ub),Nb=qa(kb.getAttribute("X"),Nb)):"BL"===wb&&(ub=qa(kb.getAttribute("Y"),ub),Cb=qa(kb.getAttribute("X"),Cb))});mb=new f(nb,Cb,ub,Nb);vb=new z(vb,db,mb,pb);ab.push(vb)});rb=Array.prototype.slice.call(qb.getElementsByTagName("DOC"))[0].getAttribute("id");return new x(rb,1,ya,Ya,ab)}function ra(pb){return(new DOMParser).parseFromString(pb,"text/html").documentElement.querySelector("body").innerHTML}
function ua(pb,rb){var tb;rb=(new TextDecoder("utf-8")).decode(rb);var qb=(new DOMParser).parseFromString(rb,"text/xml");rb=qb.getElementsByTagName("Galley").item(0);if(null!=rb){var ya=rb.getAttribute("id");rb=qb.getElementsByTagName("BBox");rb=Array.prototype.slice.call(rb);rb.forEach(function(ab){var mb=ab.getElementsByTagName("Top"),vb=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Left");var db=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Bottom");var nb=parseFloat(mb.item(0).innerHTML);
mb=ab.getElementsByTagName("Right");ab=parseFloat(mb.item(0).innerHTML);tb=new f(vb,db,nb,ab)});Xa[pb].forEach(function(ab){ab.id===ya&&!0===tb.JS(ab.galleyBox)&&(ab.galleyBox=tb)})}rb=qb.getElementsByTagName("Object").item(0);if(null!=rb){var Na=rb.getAttribute("OID");rb=qb.getElementsByTagName("BBox");rb=Array.prototype.slice.call(rb);rb.forEach(function(ab){var mb=ab.getElementsByTagName("Top"),vb=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Left");var db=parseFloat(mb.item(0).innerHTML);
mb=ab.getElementsByTagName("Bottom");var nb=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Right");ab=parseFloat(mb.item(0).innerHTML);tb=new f(vb,db,nb,ab)});Ia[pb].forEach(function(ab){ab.id===Na&&!0===tb.JS(ab.bbox)&&(ab.bbox=tb)})}rb=qb.getElementsByTagName("NewParas").item(0);if(null!=rb){var Ya=rb.getAttribute("id");Xa[pb].forEach(function(ab){if(ab.id===Ya){var mb="<Contents>"+ab.contents;mb+="</Contents>";var vb=Array.prototype.slice.call(qb.getElementsByTagName("NewPara"));
mb=(new DOMParser).parseFromString(mb,"text/xml");var db=Array.prototype.slice.call(mb.getElementsByTagName("p"));vb.forEach(function(nb){var ub=parseFloat(nb.innerHTML),Cb=!1;db.forEach(function(Nb){var kb=Nb.getAttribute("id");!1===Cb&&"0"===kb&&(Nb.setAttribute("id",ub),Cb=!0)})});ab.contents=mb.getElementsByTagName("Contents").item(0).innerHTML}})}}function va(pb){return{regex:0!==(pb&Pa.f.sv),wildcard:0!==(pb&Pa.f.Mr),wholeWord:0!==(pb&Pa.f.uv),caseSensitive:0!==(pb&Pa.f.Br)}}function sa(pb){pb=
new Uint8Array(pb);pb=(new TextDecoder("utf-8")).decode(pb);pb=(new DOMParser).parseFromString(pb,"text/xml").getElementsByTagName("Font");var rb={};Array.prototype.slice.call(pb).forEach(function(tb){var qb=tb.getAttribute("Family");qb in rb||(rb[qb]={});var ya=[];Array.prototype.slice.call(tb.getElementsByTagName("Variation")).forEach(function(Na){Na=Na.innerHTML;ya.push(Na);if(Na.includes("Regular")||Na===qb.replace(/\s+/g,""))rb[qb].hasRegular=!0;Na.includes("Bold")&&(rb[qb].hasBold=!0);Na.includes("Italic")&&
(rb[qb].hasItalic=!0)});tb=new ea(qb,ya);ob.push(tb)});Bb=Object.keys(rb).filter(function(tb){return rb[tb].hasRegular&&rb[tb].hasBold&&rb[tb].hasItalic})}r.r(wa);var xa=r(0),Ea=r(56),Ha=r(7),Aa=r(495),Ja=r(39),La=r(75),Oa=r(2),Qa=r(172),Da=r(54),Ga=r(6),Ta=r(141),Pa=r(25),Wa=r(10),eb=r(23),Sa=null,sb=null,jb=!1,hb=!1,Xa={},Ia={},Ra={},Va,bb=window.createPromiseCapability(),cb=[],ob=[],Bb=[],Ab={};wa["default"]={Oja:e,Qja:b,q$:function(pb){return Object(xa.b)(void 0,void 0,void 0,function(){var rb,
tb,qb,ya,Na,Ya,ab,mb;return Object(xa.d)(this,function(vb){switch(vb.label){case 0:return rb=pb.id,tb=pb.isText,qb=pb.pageNumber,ya=Va.getDocument(),[4,ya.be([qb])];case 1:return Na=vb.ca(),Ya=new TextEncoder,ab=Ya.encode(""),mb=ab.buffer,Sa.postMessage({cmd:"deleteObject",pdfFile:Na,pageNumber:qb,objectID:rb,isText:tb,tableData:mb},[mb]),[2]}})})},Cpa:function(pb){return Object(xa.b)(void 0,void 0,void 0,function(){var rb,tb,qb,ya,Na,Ya,ab,mb,vb,db,nb,ub,Cb;return Object(xa.d)(this,function(Nb){switch(Nb.label){case 0:return rb=
pb.id,tb=pb.position,qb=tb.top,ya=tb.left,Na=tb.bottom,Ya=tb.right,ab=pb.isText,mb=pb.pageNumber,vb=Va.getDocument(),[4,vb.be([mb])];case 1:return db=Nb.ca(),nb=new TextEncoder,ub=nb.encode(""),Cb=ub.buffer,Sa.postMessage({cmd:"transformObject",pdfFile:db,pageNumber:mb,objectID:rb,isText:ab,topVal:qb,leftVal:ya,bottomVal:Na,rightVal:Ya,tableData:Cb},[Cb]),[2]}})})},c7:function(pb,rb){return Object(xa.b)(void 0,void 0,void 0,function(){var tb,qb,ya,Na,Ya,ab,mb,vb,db,nb,ub,Cb,Nb,kb,wb;return Object(xa.d)(this,
function(Gb){switch(Gb.label){case 0:return tb="<DOC><STORY><galleys></galleys>",qb=[],ya=(new DOMParser).parseFromString(rb,"text/html"),ya.documentElement.querySelectorAll("p").forEach(function(Mb,Sb){qb[Sb]=Mb.innerHTML}),qb.forEach(function(Mb,Sb){Mb=(new DOMParser).parseFromString(qb[Sb],"text/html").documentElement.querySelector("body");Mb.childNodes.forEach(function(Rb){da(Rb)});tb+="<p>"+Mb.innerHTML+"</p>"}),tb+="</STORY></DOC>",Na=pb.pageNumber,Ya=Va.getDocument(),ab=pb.position,mb=ab.top,
vb=ab.left,db=ab.bottom,nb=ab.right,ub=pb.defaultText,Cb=pb.font,Nb=pb.fontSize,kb=pb.textColor,[4,Ya.be([Na])];case 1:return wb=Gb.ca(),Sa.postMessage({cmd:"insertNewTextBox",pdfFile:wb,pageNumber:Na,topVal:mb,leftVal:vb,bottomVal:db,rightVal:nb,defaultText:ub,font:Cb,fontSize:Nb,textColor:kb,importData:tb,content:rb}),[2]}})})},Vpa:h,Mda:na,$la:function(pb){return Object(xa.b)(this,void 0,void 0,function(){var rb,tb,qb,ya,Na,Ya,ab,mb,vb,db,nb,ub,Cb,Nb,kb,wb,Gb,Mb,Sb,Rb,Zb,za,hc=this;return Object(xa.d)(this,
function(sc){switch(sc.label){case 0:rb=pb.replaceWith;tb=pb.documentViewer;qb=pb.search;ya=pb.searchResults;if(tb){if(!ya&&!qb)throw Error('The "searchResults" parameter is missing in the options');if(void 0===rb)throw Error('The "replaceWith" parameter should not be undefined');}else throw Error('The "documentViewer" parameter is missing in the options');Na=1===ya.length;qb?(Ya=qb.D8,ab=qb.sqa):(mb=va(tb.$J()),Ya=mb.D8,ab=mb.sqa);vb=null;db=[];if(Na)vb=ya[0],db=[vb.pageNum];else try{db=Object.keys(ya.reduce(function(wc,
Gc){wc[Gc.pageNum]=Gc.pageNum;return wc},{})).map(function(wc){return Number(wc)})}catch(wc){Object(Oa.i)(wc)}nb=0;if(vb)for(ub=tb.qk(),Cb=-1,Nb=0,kb=ub.length;Nb<kb&&(wb=ub[Nb],wb.pageNum===Cb?nb++:(Cb=wb.pageNum,nb=0),!Object(Ta.a)(wb,vb));Nb++);Gb=ya[0].resultStr;Mb=Ya?"mg":"mgi";Sb=ab?"\\b("+Gb+")\\b":"("+Gb+")";Rb=new RegExp("(?<!</?[^>]*|&[^;]*)"+Sb,Mb);bb=window.createPromiseCapability();return sb?[3,2]:[4,e(tb)];case 1:sc.ca(),sc.label=2;case 2:return jb=!0,Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_STARTED),
Zb=0,za=db.map(function(wc){return Object(xa.b)(hc,void 0,void 0,function(){var Gc,Mc=this;return Object(xa.d)(this,function(){Gc=new Promise(function(dd,Rc){return Object(xa.b)(Mc,void 0,void 0,function(){var Bd=this;return Object(xa.d)(this,function(je){switch(je.label){case 0:return cb[wc]=window.createPromiseCapability(),[4,b(tb.getDocument(),wc,!0)];case 1:return je.ca(),cb[wc].promise.then(function(){return Object(xa.b)(Bd,void 0,void 0,function(){function kc(ed,ve){return Object(xa.b)(this,
void 0,void 0,function(){var Qd,Wc;return Object(xa.d)(this,function(Xc){switch(Xc.label){case 0:Qd=Object(eb.f)(),Ab[Qd]=function(){delete Ab[Qd];dd(!0);Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_TEXT_REPLACED)},Xc.label=1;case 1:return Xc.fg.push([1,3,,4]),[4,h(ed,ve,!0,Qd)];case 2:return Xc.ca(),[3,4];case 3:return Wc=Xc.ca(),Object(Oa.i)(Wc),Rc(Wc),[3,4];case 4:return[2]}})})}var jc,Yd,ke,Cd,Hd,le,oc,Zd,Vc,nd,Dd,Dc,Pd,me,$d,Id,Jd;return Object(xa.d)(this,function(){jc=Va.la();Yd=jc.nb().filter(function(ed){return ed.PageNumber===
wc}).filter(function(ed){return ed.Re()}).concat();ke=[];Hd=Cd=0;for(le=Yd.length;Hd<le;Hd++){oc=Yd[Hd];Zd=oc.ff;Vc=na(Zd);nd=[];try{for(Dd=void 0;null!==(Dd=Rb.exec(Vc));)nd.push(Dd),ke.push(ya[Zb]),Zb++}catch(ed){Object(Oa.i)(ed)}if(nd.length)if(Cd+=nd.length,Na&&Cd>nb){Dc=Math.abs(Cd-nd.length-nb);Pd=nd[Dc].index;me=Vc.substr(0,Pd);$d=rb;Id=Vc.substr(Pd+Gb.length,Vc.length);Jd=""+me+$d+Id;Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_TEXT_FOUND,[[vb]]);kc(oc,Jd);break}else Na||(hb=!0,Jd=Vc.replace(Rb,rb),
Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_TEXT_FOUND,[ke]),kc(oc,Jd))}return[2]})})}).catch(Rc),[2]}})})});return[2,Gc]})})}),[2,Promise.all(za).then(function(){Na&&vb?setTimeout(function(){var Mc=[];tb.xz(ya[0].resultStr,tb.$J(),{startPage:db[0],endPage:db[0],fullSearch:!0,onDocumentEnd:function(){hb=jb=!1;Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_ENDED);tb.DO(db[0]-1,Mc)},onResult:function(dd){dd.resultCode===Pa.e.jn&&Mc.push(dd)}})},200):(tb.fT(),tb.Mm(),tb.re(),hb=jb=!1,Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_ENDED));
var wc=Va.la(),Gc=wc.nb().filter(function(Mc){return Mc.Re()});wc.If(Gc,{force:!0,source:"contentEditTool"})})]}})})},Gma:function(pb,rb){var tb=ma(pb.ff.contents);tb=(new DOMParser).parseFromString(tb,"text/html").documentElement.querySelector("body");var qb=tb.querySelectorAll("p"),ya=new XMLSerializer;qb.forEach(function(Na){Na.style.fontFamily=rb});tb=ya.serializeToString(tb);h(pb,tb)},Hma:function(pb,rb){var tb=ma(pb.ff.contents);tb=(new DOMParser).parseFromString(tb,"text/html").documentElement.querySelector("body");
var qb=tb.querySelectorAll("p"),ya=new XMLSerializer;qb.forEach(function(Na){Na.style.fontSize=rb});tb=ya.serializeToString(tb);h(pb,tb)},o7:function(pb,rb){return Object(xa.b)(void 0,void 0,void 0,function(){var tb,qb,ya,Na,Ya,ab,mb;return Object(xa.d)(this,function(vb){switch(vb.label){case 0:return tb=pb.ff.id,qb=pb.PageNumber,ya=Va.getDocument(),[4,ya.be([qb])];case 1:return Na=vb.ca(),Ya=new TextEncoder,ab=Ya.encode(""),mb=ab.buffer,Sa.postMessage({cmd:"AlignParaText",pdfFile:Na,pageNumber:qb,
galleyID:tb,alignment:rb,topVal1:"",leftVal1:"",bottomVal1:"",rightVal1:"",topVal2:"",leftVal2:"",bottomVal2:"",rightVal2:"",tableData:mb},[mb]),[2]}})})},e8:function(pb){var rb=ma(pb.ff.contents);rb=(new DOMParser).parseFromString(rb,"text/html").documentElement.querySelector("body");var tb=rb.querySelectorAll("p"),qb=new XMLSerializer,ya="bold"===tb[0].style.fontWeight,Na=qb.serializeToString(tb[0]).includes("<strong>");tb.forEach(function(Ya){if(ya||Na){Ya.style.fontWeight="normal";var ab=qb.serializeToString(Ya).replace(/<strong>/g,
"");ab=ab.replace(/<\/strong>/g,"");ab=(new DOMParser).parseFromString(ab,"text/html").documentElement.querySelector("p");Ya.parentElement.replaceChild(ab,Ya)}else Ya.style.fontWeight="bold",Ya.innerHTML="<strong>"+Ya.innerHTML.trim()+"</strong>"});rb=qb.serializeToString(rb);h(pb,rb)},xha:function(pb){var rb=ma(pb.ff.contents);rb=(new DOMParser).parseFromString(rb,"text/html").documentElement.querySelector("body");var tb=rb.querySelectorAll("p"),qb=new XMLSerializer,ya="italic"===tb[0].style.fontStyle,
Na=qb.serializeToString(tb[0]).includes("<em>");tb.forEach(function(Ya){if(ya||Na){Ya.style.fontStyle="normal";Ya.style.font.includes("Italic")&&(Ya.style.font=Ya.style.font.replace("Italic",""));var ab=qb.serializeToString(Ya).replace(/<em>/g,"");ab=ab.replace(/<\/em>/g,"");ab=(new DOMParser).parseFromString(ab,"text/html").documentElement.querySelector("p");Ya.parentElement.replaceChild(ab,Ya)}else Ya.style.fontStyle="italic",Ya.innerHTML="<em>"+Ya.innerHTML.trim()+"</em>"});rb=qb.serializeToString(rb);
h(pb,rb)},Ipa:function(pb){var rb=ma(pb.ff.contents);rb=(new DOMParser).parseFromString(rb,"text/html").documentElement.querySelector("body");var tb=rb.querySelectorAll("p"),qb=new XMLSerializer,ya=tb[0].style.textDecoration.includes("underline")||tb[0].style.textDecoration.includes("word"),Na=qb.serializeToString(tb[0]).includes("<u>");tb.forEach(function(Ya){if(ya||Na){Ya.style.textDecoration=Ya.style.textDecoration.replace("underline","");var ab=qb.serializeToString(Ya).replace(/<u>/g,"");ab=ab.replace(/<\/u>/g,
"");ab=(new DOMParser).parseFromString(ab,"text/html").documentElement.querySelector("p");Ya.parentElement.replaceChild(ab,Ya)}else Ya.style.textDecoration.includes("none")?Ya.style.textDecoration=Ya.style.textDecoration.replace("none","underline"):Ya.style.textDecoration+=" underline",Ya.innerHTML="<u>"+Ya.innerHTML.trim()+"</u>"});rb=qb.serializeToString(rb);h(pb,rb)},uoa:function(pb,rb){var tb=ma(pb.ff.contents);tb=(new DOMParser).parseFromString(tb,"text/html").documentElement.querySelector("body");
var qb=tb.querySelectorAll("p"),ya=new XMLSerializer;qb.forEach(function(Na){Na.style.color=rb});tb.querySelectorAll("span").forEach(function(Na){Na.setAttribute("style","color:"+rb)});tb=ya.serializeToString(tb);h(pb,tb)},zda:function(){return Bb},a7:function(pb){return Object(xa.b)(void 0,void 0,void 0,function(){var rb,tb,qb,ya,Na,Ya,ab,mb,vb,db;return Object(xa.d)(this,function(nb){switch(nb.label){case 0:return rb=pb.pageNumber,tb=pb.newImage,qb=pb.scaleType,ya=pb.position,Na=ya.top,Ya=ya.left,
ab=ya.bottom,mb=ya.right,vb=Va.getDocument(),[4,vb.be([rb])];case 1:return db=nb.ca(),Sa.postMessage({cmd:"insertImage",pdfFile:db,pageNumber:rb,newImage:tb,scaleType:qb,topVal:Na,leftVal:Ya,bottomVal:ab,rightVal:mb},[]),[2]}})})}}}}]);}).call(this || window)