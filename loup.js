//pour le workshop
//pour la date d'aujourd'hui
var now= new Date();
//la date de la pleine lune et donc de son lever et comme mettre les dates avec les secondes est plutôt compliqué, alors
var moon=new Date(1604147927000);//nombre de jours qui va me donner 31
//console.log()
//différence entre le jr de la pleine lune et aujourd'hui et il nous le donne en millisecondes, on le demande en secondes
var distance = moon.getTime()-now.getTime();
var distancearrondi =Math.floor(distance/1000);
console.log(distance);
//countDown direct vers Halloween !
halloween = setInterval(function(){
    distancearrondi--;
    //ne pas oublier de concaténer les titres et les paragraphes avec leurs balises respéctives
    document.body.innerHTML="<h1>Loup Garouuuuuuuu</h1>" + "<p class='countdown'>CountDown</p>"+ distancearrondi;//
    //console.log(distancearrondi);
    if(distancearrondi<=0){
        clearInterval(halloween);
        document.body.innerHTML= "Halloween !"
        document.body.style. backgroundColor = "black";
        document.body.style.color= "peru";

    }
},1000)
//document.body.innerHTML= distancearrondi

//var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((distance % (1000 * 60)) / 1000);

