//toggle menu on medium size devices
document.getElementById('close-menu-button').addEventListener('click', function() {
    console.log("tocado")
    document.getElementById('side-menu').classList.toggle('dissapear');
    document.getElementById('side-menu').classList.toggle('slide-in');
   });

document.getElementById("hamburguer").addEventListener("click", function(){
    document.getElementById('side-menu').classList.toggle('dissapear');
    document.getElementById('side-menu').classList.toggle('slide-in');
});


//scrolldown buttons
document.getElementById("white-scroll-button").addEventListener("click", function(){
    document.getElementById("side-to-design").scrollIntoView( {behavior: 'smooth'});
});

document.getElementById("terracota-scroll-button").addEventListener("click", function(){
    document.getElementById("side-to-design").scrollIntoView( {behavior: 'smooth'});
});


//slider

