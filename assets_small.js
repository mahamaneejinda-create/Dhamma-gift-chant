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
width:min(74vw,250px);
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
// Contact links — clickable icons
const contactHeading = [...document.querySelectorAll("h2")]
  .find(el => el.textContent.trim() === "ช่องทางติดต่อ");

if (contactHeading) {
  const oldContacts = [];
  let el = contactHeading.nextElementSibling;

  while (el && el.tagName === "P" && oldContacts.length < 5) {
    oldContacts.push(el);
    el = el.nextElementSibling;
  }

  const contacts = [
    ["Facebook Page", "https://www.facebook.com/share/19FgpNXBiP/?mibextid=wwXIfr", "ⓕ"],
    ["Facebook", "https://www.facebook.com/share/1HWDEenfR5/?mibextid=wwXIfr", "f"],
    ["LINE", "https://line.me/ti/p/@harulada", "LINE"],
    ["TikTok", "https://www.tiktok.com/@pol65454", "♪"],
    ["Instagram", "https://www.instagram.com/pol_mahamaneejinda", "◎"],
    ["YouTube", "https://youtube.com/channel/UCoDI7P64bJo3S2GVkRuz2xA?si=_lscT9YXHUss0Re0", "▶️"]
  ];

  const box = document.createElement("div");
  box.style.cssText =
    "display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin:22px 0 30px;";

  contacts.forEach(([name, url, icon]) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", name);
    a.style.cssText =
      "display:flex;flex-direction:column;align-items:center;justify-content:center;" +
      "min-width:92px;padding:12px 10px;border:1px solid #e7dfd3;border-radius:14px;" +
      "text-decoration:none;color:#2d2a26;background:#fff;";

    const mark = document.createElement("strong");
    mark.textContent = icon;
    mark.style.cssText =
      "font-size:22px;min-height:34px;display:flex;align-items:center;";

    const label = document.createElement("span");
    label.textContent = name;
    label.style.cssText = "font-size:13px;margin-top:4px;";
label.insertAdjacentHTML("beforeend", '<small style="display:block;margin-top:6px;padding:3px 9px;border-radius:999px;background:#f6efe5;color:#7a5b32;font-size:10px;font-weight:600;">แตะเพื่อเปิด</small>');
    a.append(mark, label);
    box.appendChild(a);
  });

  oldContacts.forEach(p => p.remove());
  contactHeading.insertAdjacentElement("afterend", box);
}
