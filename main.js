const toggle = document.getElementById('toggleDark');
const bodyArea = document.querySelector('body');
const darkLight = document.querySelector('h1');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        bodyArea.style.background="white";
        bodyArea.style.color='black';
        bodyArea.style.transition='1.5s';
        darkLight.textContent='JavScript Toggle Light mode';
    }else{
        bodyArea.style.background="black";
        bodyArea.style.color='white';
        bodyArea.style.transition='1.5s';
        darkLight.textContent='JavScript Toggle Dark mode';
    }
});




