const NAMES = {
  sweet: "Rajula ❤️",
  respect: "Madam ji 🌸"
};

document.getElementById("nameSweet").innerText = NAMES.sweet;
document.getElementById("nameRespect").innerText = NAMES.respect;

function next(n){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('s'+n).classList.add('active');
}

function goPlease(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('s5').classList.add('active');
}

function goFinal(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('s9').classList.add('active');
  startConfetti();
  heartBlast();
}

function moveNo(btn){
  btn.style.position='absolute';
  btn.style.top=Math.random()*80+'%';
  btn.style.left=Math.random()*80+'%';
}

/* HEART FLOAT */
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDuration=(3+Math.random()*3)+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},300);

/* MUSIC */
document.addEventListener("click",()=>{
  document.getElementById("bgMusic").play();
},{once:true});

/* CONFETTI */
function startConfetti(){
  for(let i=0;i<80;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},100%,60%)`;
    c.style.animationDuration=(2+Math.random()*3)+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}

/* HEART BLAST */
function heartBlast(){
  for(let i=0;i<30;i++){
    const h=document.createElement("div");
    h.className="heart-blast";
    h.innerHTML="❤️";
    h.style.left="50vw";
    h.style.top="50vh";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}
