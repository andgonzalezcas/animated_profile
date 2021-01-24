var things = ["Estudiante de Ing de sistemas", "Estudiante de FullStack en Web Development", "Amante de las papitas de Mc Donals", "Amante de las Donas de Dunkin Donuts", "Amante de las vistas panoramicas", "Ciclista Amateur"];

const $Iam = document.getElementById('Iam');
var _counter = 0;

$Iam.addEventListener('animationiteration', (event)=>{
    $Iam.innerHTML = things[_counter];
    if(_counter < 5){
        _counter++;
    }else{
        _counter = 0;
    }
});