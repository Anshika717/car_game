//declaration part
let t=60;
let l=44;
let n=0;
let gameStarted=true;


//naming part
let score=document.getElementById("score");
let car=document.getElementById("mycar");
let start=document.getElementById("start");
let road=document.getElementById("road");
let car1=document.getElementById("car1");
let car2=document.getElementById("car2");
let car3=document.getElementById("car3");
let car4=document.getElementById("car4");


//functions
let moveCar=(x)=>{
    if (!gameStarted) return;
    if (x.keyCode==38 || x.keyCode==87){
        t=t-3;
    }
    if (x.keyCode==37 || x.keyCode==65){
        l=l-1;
    }
    if (x.keyCode==40 || x.keyCode==83){
        t=t+3;
    }
    if (x.keyCode==39 || x.keyCode==68){
        l=l+1;
    }
    car.style.top=`${t}vh`
    car.style.left=`${l}vw`
}


let movethings=()=>{
    gameStarted = true;
    window.addEventListener("keydown",moveCar);

    start.style.display='none';
    road.style.animation='road 20s linear infinite'
   
    car1.style.display = 'block';
    car2.style.display = 'block';
    car3.style.display = 'block';
    car4.style.display = 'block';

    car1.style.animation='car1 2s linear infinite';
    car2.style.animation='car2 3s linear infinite';
    car3.style.animation='car3 2.5s linear infinite';
    car4.style.animation='car4 2.8s linear infinite';
    
    setInterval(() => {
        num = Math.floor(Math.random() * (33 - 29 + 1) + 29)
        document.getElementById("car1").style.left = `${num}rem`

    }, 2000)
    setInterval(() => {
        num = Math.floor(Math.random() * (43 - 37 + 1) + 37)
        document.getElementById("car2").style.left = `${num}rem`

    }, 3000)
    setInterval(() => {
        num = Math.floor(Math.random() * (53 - 48.5 + 1) + 48.5)
        document.getElementById("car3").style.left = `${num}rem`

    }, 2500)
    setInterval(() => {
        num = Math.floor(Math.random() * (62 - 58 + 1) + 58)
        document.getElementById("car4").style.left = `${num}rem`

    }, 2800)
    setInterval(() => {

        document.getElementById("score").innerText = `Score : ${n}`
        n = n + 1


        let ecar1_left = Math.abs(document.getElementById("car1").getBoundingClientRect().left);
        let ecar1_right = Math.abs(document.getElementById("car1").getBoundingClientRect().right);
        let ecar1_top = Math.abs(document.getElementById("car1").getBoundingClientRect().top);
        let ecar1_bottom = Math.abs(document.getElementById("car1").getBoundingClientRect().bottom);

        let ecar2_left = Math.abs(document.getElementById("car2").getBoundingClientRect().left);
        let ecar2_right = Math.abs(document.getElementById("car2").getBoundingClientRect().right);
        let ecar2_top = Math.abs(document.getElementById("car2").getBoundingClientRect().top);
        let ecar2_bottom = Math.abs(document.getElementById("car2").getBoundingClientRect().bottom);

        let ecar3_left = Math.abs(document.getElementById("car3").getBoundingClientRect().left);
        let ecar3_right = Math.abs(document.getElementById("car3").getBoundingClientRect().right);
        let ecar3_top = Math.abs(document.getElementById("car3").getBoundingClientRect().top);
        let ecar3_bottom = Math.abs(document.getElementById("car3").getBoundingClientRect().bottom);

        let ecar4_left = Math.abs(document.getElementById("car4").getBoundingClientRect().left);
        let ecar4_right = Math.abs(document.getElementById("car4").getBoundingClientRect().right);
        let ecar4_top = Math.abs(document.getElementById("car4").getBoundingClientRect().top);
        let ecar4_bottom = Math.abs(document.getElementById("car4").getBoundingClientRect().bottom);

        let mycar_left = Math.abs(document.getElementById("mycar").getBoundingClientRect().left);
        let mycar_right = Math.abs(document.getElementById("mycar").getBoundingClientRect().right);
        let mycar_top = Math.abs(document.getElementById("mycar").getBoundingClientRect().top);
        let mycar_bottom = Math.abs(document.getElementById("mycar").getBoundingClientRect().bottom);

        let road_left = Math.abs(document.getElementById("road").getBoundingClientRect().left);
        let road_right = Math.abs(document.getElementById("road").getBoundingClientRect().right);
        let road_top = Math.abs(document.getElementById("road").getBoundingClientRect().top);
        let road_bottom = Math.abs(document.getElementById("road").getBoundingClientRect().bottom);


        if (mycar_left <= road_left || mycar_right >= road_right || mycar_top <= road_top || mycar_bottom >= road_bottom) {
            setTimeout(() => {
                alert("You hit the boundary! GAME OVER!");
            }, 10);
            location.reload();
        }

        if (((ecar1_left < mycar_left && mycar_left < ecar1_right) || (ecar1_left < mycar_right && mycar_right < ecar1_right)) && ((ecar1_top < mycar_top && mycar_top < ecar1_bottom) || (ecar1_top < mycar_bottom && mycar_bottom < ecar1_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`);

            })
            location.reload()

        }

        if (((ecar2_left < mycar_left && mycar_left < ecar2_right) || (ecar2_left < mycar_right && mycar_right < ecar2_right)) && ((ecar2_top < mycar_top && mycar_top < ecar2_bottom) || (ecar2_top < mycar_bottom && mycar_bottom < ecar2_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()

        }

        if (((ecar3_left < mycar_left && mycar_left < ecar3_right) || (ecar3_left < mycar_right && mycar_right < ecar3_right)) && ((ecar3_top < mycar_top && mycar_top < ecar3_bottom) || (ecar3_top < mycar_bottom && mycar_bottom < ecar3_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()

        }

        if (((ecar4_left < mycar_left && mycar_left < ecar4_right) || (ecar4_left < mycar_right && mycar_right < ecar4_right)) && ((ecar4_top < mycar_top && mycar_top < ecar4_bottom) || (ecar4_top < mycar_bottom && mycar_bottom < ecar4_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()

        }
        

},100)
}






//using functions,names,declaration
start.addEventListener("click",movethings);

