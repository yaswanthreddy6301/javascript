function fun(){
    var a=document.getElementById("inp").value;
    document.getElementById("container").style.backgroundImage=`url(./javascript/heroes/${a}.jpg)`;
    document.getElementById("container").style.width="500px";
    document.getElementById("container").style.height="500px";
    document.getElementById("container").style.backgroundSize="100%";
    document.getElementById("container").style.backgroundRepeat="no-repeat";
}

// function fun(){
//     var a=document.getElementById("inp").value;
//     document.getElementById("container").style.backgroundColor="red";
//     document.getElementById("container").style.width="500px";
//     document.getElementById("container").style.height="00px";
//     document.getElementById("container").style.backgroundSize="100%";
//     document.getElementById("container").style.backgroundRepeat="no-repeat";
// }