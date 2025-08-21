---
layout: default
title: Satoshi 2.0
---

<!-- CSS inline p/ garantir que aplica já -->
<style>
:root{--brand:#7c3aed}
body{margin:0}
.hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;overflow:hidden}
.hero .bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1580428180121-99a9b40add63?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;filter:brightness(.55)}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(124,58,237,.55),rgba(34,211,238,.35));mix-blend:overlay}
.hero .inner{position:relative;z-index:1;padding:2rem}
.hero h1{font-size:clamp(2rem,6vw,3.6rem);margin:0 0 1rem}
.hero p{max-width:900px;margin:0 auto 1.3rem;line-height:1.6}
.btn{display:inline-block;margin:.4rem;padding:.75rem 1.2rem;border-radius:.6rem;text-decoration:none;background:var(--brand);color:#fff;font-weight:600;transition:.2s}
.btn:hover{opacity:.88}
</style>

<div class="hero">
  <div class="bg"></div>
  <div class="inner">
    <h1>Satoshi 2.0</h1>
    <p>Open-source tools for <em>self-custody</em>, <em>social recovery</em> and <em>accessible OpSec</em>.</p>
    <p>
      <a class="btn" href="https://github.com/voraxanon/whitepaper" target="_blank" rel="noopener">📜 Whitepaper</a>
      <a class="btn" href="https://github.com/voraxanon/social-recovery" target="_blank" rel="noopener">🛟 Social Recovery</a>
      <a class="btn" href="https://github.com/voraxanon/protocol-lab" target="_blank" rel="noopener">🧪 Protocol Lab</a>
    </p>
    <p><strong>Donate (BTC):</strong> <code>bc1qpyukknh3zqdpwqv7dwn5dqxysc8kt8fsqu80xv</code></p>
  </div>
</div>
