(async function(){
  const ul = document.getElementById('changelog');
  if(!ul) return;
  try{
    const res = await fetch('https://api.github.com/repos/voraxanon/voraxanon.github.io/commits?per_page=5');
    const data = await res.json();
    ul.innerHTML = data.map(c => {
      const msg = (c.commit?.message || '').split('\n')[0];
      const sha = (c.sha || '').slice(0,7);
      const url = c.html_url || '#';
      const when = c.commit?.author?.date ? new Date(c.commit.author.date).toLocaleString() : '';
      return \<li><a href="\" target="_blank" rel="noopener">\</a> <small style="opacity:.7">(\ · \)</small></li>\;
    }).join('');
  }catch(e){
    ul.innerHTML = '<li><em>Não foi possível carregar o changelog agora.</em></li>';
  }
})();