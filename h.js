
function shyam(){
var p=parseInt(document.getElementById("box1").value);
var r=parseInt(document.getElementById("box2").value);
var t=parseInt(document.getElementById("box3").value);
var interest=p*r*t/100;
document.getElementById("inter").innerHTML="your interest rate is:="+interest+"ruppes";
var amount=interest+p;
document.getElementById("am").innerHTML="your total payable amount is:="+amount+"ruppes";


}
function jai(){
var jo=parseInt(prompt("enter your interest"))
var ho=parseInt(prompt("enter your principal"))
var to=parseInt(prompt("enter your time"))
var sum=jo*100;
var sum3=ho*to;
var final=sum/sum3;
alert("your interest rate is:="+final+"%");

}