// ✏️ Personalize everything here:
var C = {
  her: "Baccha",
  to: "Baccha",
  me: "your kiddo",
  wrong: "I hurt you, and I’m deeply sorry. What I did was not okay. You wanted me to understand, but I failed, and I am genuinely sorry.",
  fix: "I take my saari galti. Let’s fix this. I know I should have done this bahut pehle, but kya karu... let me fix this ab, please.",
  feels: [
    "After all your busy day you wanted me to understand, but nai kiya and I am sorry.",
    "You wanted me to be mature, take decisions, and instead of complaining, you wanted me to talk to you accha se... I am sorry for that.",
    "You wanted a person who could make you feel loved and take care of you bhout accha se, and I could not do it... I am sorry."
  ],
  why: "I never understood what you wanted from me. You wanted me to be nice, understanding, and mature, but I couldn’t become how you wanted me to be.",
  promises: [
    ["I will be understanding.", "To truly listen and understand what you need, not defend myself."],
    ["I will be mature.", "Keeping my mood and myself duur, and treating you with patience and care."],
    ["I will fix this.", "With consistent actions you can see, every single day."],
    ["I will do whatever it takes.", "I will take any kind of risk that will fix us. Please ab na yaar..."]
  ],
  love: "You make ordinary days feel warm. Your laugh, your care, and the way you believe in me are my favourite things in the world. Yaar, I know I messed up a lot... I am so sorry. You did make me feel loved, you did not make me beg for anything. It was just me who mistook all the stuff, like each and everything. You did make me feel loved. I realise how wrong I was, and I want to fix this. I can't afford to lose someone like you. You are the best one who always did her best, and once again, I am sorry. Please maaf kar do... I am really panicking right now. Please yaar, ab bahut ho gaya, let's fix this please ab.",
  // 📸 Put your pictures in the "photos" folder, then list them here:
  photos: [
    { src: "photos/where-we-started.jpg", cap: "Where we started" },
    { src: "photos/vibe.jpg", cap: "having a nice vibe (trying ai camera)" },
    { src: "photos/dance-partner.jpg", cap: "became my dance partner" },
    { src: "photos/happiest.jpg", cap: "being the happiest" }
  ]
};

document.getElementById("to").textContent = C.to || C.her;
["wrong", "fix", "why", "love"].forEach(function (k) { if (document.getElementById(k)) document.getElementById(k).textContent = C[k]; });
document.getElementById("sign").textContent = "Always yours, " + C.me;

var fe = document.getElementById("feels");
if (fe && C.feels) {
  fe.innerHTML = "";
  C.feels.forEach(function (f) {
    var d = document.createElement("div"); d.className = "card reveal";
    d.textContent = f;
    fe.appendChild(d);
  });
}

var pr = document.getElementById("promises");
C.promises.forEach(function (p) {
  var d = document.createElement("div"); d.className = "card reveal";
  var b = document.createElement("b"); b.textContent = p[0] + " ";
  d.appendChild(b); d.appendChild(document.createTextNode(p[1])); pr.appendChild(d);
});

if (C.photos.length) {
  document.getElementById("memories").style.display = "flex";
  var g = document.getElementById("gallery");
  C.photos.forEach(function (p, idx) {
    if (idx > 0) {
      var arr = document.createElement("div");
      arr.className = "gallery-arrow reveal";
      arr.innerHTML = '<div class="arrow-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><polyline points="13 5 20 12 13 19"></polyline></svg></div>';
      g.appendChild(arr);
    }
    var f = document.createElement("figure"); f.className = "polaroid reveal"; f.style.margin = "0";
    var im = document.createElement("img"); im.src = p.src; im.alt = p.cap || "Us";
    var c = document.createElement("figcaption"); c.textContent = p.cap || "";
    f.appendChild(im); f.appendChild(c); g.appendChild(f);
  });
}

var P = document.getElementById("petals"), em = ["🌸", "💗", "🌷", "✨"];
for (var i = 0; i < 16; i++) {
  var s = document.createElement("i");
  s.textContent = em[i % em.length];
  s.style.left = Math.random() * 100 + "%";
  s.style.fontSize = 12 + Math.random() * 16 + "px";
  s.style.animationDuration = 10 + Math.random() * 12 + "s";
  s.style.animationDelay = -Math.random() * 20 + "s";
  P.appendChild(s);
}

var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach(function (el, i) {
  el.style.transitionDelay = (i % 3) * 0.15 + "s";
  io.observe(el);
});