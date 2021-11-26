var u1 = prompt("Enter First player Name : ");
var u2 = prompt("Enter Second player Name : ");

var r1 = Math.floor(Math.random()*6)+1;
var r1image = "dice"+r1+".png";

//change source of the image
var simage = r1image;

var im1 = document.querySelectorAll("img")[0];
im1.setAttribute('src',simage);

var r2 = Math.floor(Math.random()*6)+1;
var r2image = "dice"+r2+".png";
var s2image = r2image;
var im2 = document.querySelectorAll('img')[1];
im2.setAttribute('src',s2image);

if(r1 > r2){
    document.querySelector("h1").innerHTML = ` 🏁 ${u1} Wins `;
}
else if(r2 > r1){
    document.querySelector("h1").innerHTML = ` 🏁 ${u2} Wins `;
}
else{
    document.querySelector("h1").innerHTML = " Match Draw";
}
