document.addEventListener("DOMContentLoaded",()=>{

const st=document.createElement("style");
st.textContent=`
.hero-photo{
display:block;
width:min(100%,520px);
height:auto;
margin:0 auto 24px;
border-radius:22px;
box-shadow:0 10px 28px rgba(0,0,0,.10)
}
.signature-block{
text-align:center;
margin:28px 0 6px
}
.signature-img{
display:block;
width:min(78%,430px);
height:auto;
margin:0 auto 8px
}
.credit-name,.credit-role{
text-align:center;
margin:2px 0
}
.closing-mark{
text-align:center;
margin:54px auto 8px
}
.closing-logo{
display:block;
width:min(74vw,270px);
height:auto;
margin:0 auto
}`;
document.head.appendChild(st);

const h=document.querySelector("header");
if(h){
const i=document.createElement("img");
i.className="hero-photo";
i.alt="อาจารย์พล มหามณีจินดา";
i.src="portrait.webp";
h.prepend(i);
}

const ps=[...document.querySelectorAll("main.article p")];
const n=ps.find(x=>x.textContent.trim()==="อาจารย์พล มหามณีจินดา");
const r=ps.find(x=>x.textContent.trim()==="ผู้รวบรวมและเรียบเรียง");

if(n&&r){
const b=document.createElement("div");
const i=document.createElement("img");
b.className="signature-block";
i.className="signature-img";
i.alt="ลายเซ็น อาจารย์พล มหามณีจินดา";
i.src="signature-final.webp";
b.appendChild(i);
n.className="credit-name";
r.className="credit-role";
n.before(b);
b.appendChild(n);
b.appendChild(r);
}

const m=document.querySelector("main.article");
if(m){
const b=document.createElement("div");
const i=document.createElement("img");
b.className="closing-mark";
i.className="closing-logo";
i.alt="ตราสัญลักษณ์ อาจารย์พล มหามณีจินดา";
i.src="logo.webp";
b.appendChild(i);
m.appendChild(b);
}

});
