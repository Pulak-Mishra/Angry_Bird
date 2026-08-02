const text=`Happy Friendship Day!

Life became brighter after meeting you.

Thank you for every laugh, every memory, and every moment.

Maybe one day you'll understand why you became so important to me.

— Enemy ❤️`;
let i=0,e=document.getElementById('msg');
(function t(){if(i<text.length){e.textContent+=text[i++];setTimeout(t,35);}})();
document.getElementById('btn').onclick=()=>document.getElementById('popup').classList.remove('hide');
