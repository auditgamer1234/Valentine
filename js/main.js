// Typing letter
const text = `Dear Love,

From the moment you walked into my life,
everything felt warmer and brighter.

This website is my heart,
written in code.

You have been the greatest and the most beautiful memory of mine.
The day i got the very first chance of having your time was undoubtedly the most wonderful one.
Your presence is so heartwarming that getting away feels like punishment.
Your smile gives me the world i once desired in my life.
Looking at you feels like a dream, the perfect one, came true.
I don’t know how all this happened but i do know that i would never wish my old life after this.
You have become a part of me, one i would never be able to separate from myself.
You have infiltrated my mind with such beauty that all i think, all i want, all i live for is you khanak.
I was born 16 years ago but these 2 years made me feel ALIVE.
I want you beside me not for days, weeks, months or years.
I want you to be there with me when life won’t be.
You are the purest and the most special person for me, i can’t afford to lose you khanak.
I love you khanak
i really do
and now the last question… 💖`;

let i = 0;
const speed = 45;
const target = document.getElementById("typed-text");

if (target) {
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// NO button runs
function moveNo() {
  const b = document.querySelector(".no-btn");
  b.style.left = Math.random() * (window.innerWidth - 100) + "px";
  b.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

// YES celebration
function celebrate() {
  fireworks();
  hearts();
  setTimeout(() => location.href = "secret.html", 2500);
}

// Hearts
function hearts() {
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }
}

// Fireworks
function fireworks() {
  for (let i = 0; i < 30; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 2000);
  }
}

// Secret unlock
function unlock() {
  const code = document.getElementById("code").value.toLowerCase();
  const msg = document.getElementById("secret-msg");

  if (code === "kitten") {
    msg.innerHTML = "YayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayayyyaayayayayayayayI love you forever ❤️";
    fireworks();
  } else {
    msg.innerHTML = "Are you sure kitten?😉 ";
  }
}

// Easter egg
let taps = 0;
document.body.addEventListener("click", () => {
  taps++;
  if (taps === 7) alert("🐣 Easter Egg: You are my favorite person ❤️");
});