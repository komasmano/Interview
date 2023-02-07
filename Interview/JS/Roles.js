function fun1()
{
    var a=document.getElementById("stusignup")
    a.style.display="none";


    
    var b=document.getElementById("mastersignup")
    b.style.display="none";


    var c=document.getElementById("signin")
    c.style.display="block";
}


function fun2()
{
    var a=document.getElementById("signin")
    a.style.display="none";


    var b=document.getElementById("mastersignup")
    b.style.display="none";

    var c=document.getElementById("stusignup")
    c.style.display="block";


}

function fun3()
{
    var a=document.getElementById("signin")
    a.style.display="none";


    var b=document.getElementById("mastersignup")
    b.style.display="block";

    var c=document.getElementById("stusignup")
    c.style.display="none";


}


let btn1=document.getElementById("button2");
btn1.addEventListener("click", function()
 {
    alert("submitted sucessfully..!!");


var disp=document.getElementById("table2")

var table=document.createElement("table")
disp.appendChild(table);
table.style.width="100%"
table.style.borderSpacing="0px"
table.style.height="30px"
table.style.textAlign="center"


var tr=document.createElement("tr");
table.appendChild(tr);

var t1=document.createElement("td");
tr.appendChild(t1);
t1.style.textAlign="center";
var t2=document.createElement("td");
tr.appendChild(t2);
t2.style.textAlign="center";
var t3=document.createElement("td");
tr.appendChild(t3);
t3.style.textAlign="center";
var t4=document.createElement("td");
tr.appendChild(t4);
t4.style.textAlign="center";
var t5=document.createElement("td");
tr.appendChild(t5);
t5.style.textAlign="center";

var username=document.getElementById("suser").value;
t1.textContent=username;
var pswd=document.getElementById("spswd").value;
t2.textContent=pswd;
var mail=document.getElementById("semail").value;
t3.textContent=mail;
var id=document.getElementById("stuid").value;
t4.textContent=id;
var role=document.getElementById("srole").value;
t5.textContent=role;


})



let btn2=document.getElementById("button3");
btn2.addEventListener("click", function()
 {

alert("submitted sucessfully..!!");

var disp=document.getElementById("table2")

var table=document.createElement("table")
disp.appendChild(table);
table.style.width="100%"
table.style.borderSpacing="0px"
table.style.height="30px"
table.style.textAlign="center"


var tr=document.createElement("tr");
table.appendChild(tr);

var t1=document.createElement("td");
tr.appendChild(t1);
t1.style.textAlign="center";
var t2=document.createElement("td");
tr.appendChild(t2);
t2.style.textAlign="center";
var t3=document.createElement("td");
tr.appendChild(t3);
t3.style.textAlign="center";
var t4=document.createElement("td");
tr.appendChild(t4);
t4.style.textAlign="center";
var t5=document.createElement("td");
tr.appendChild(t5);
t5.style.textAlign="center";

var username=document.getElementById("muser").value;
t1.textContent=username;
var pswd=document.getElementById("mpswd").value;
t2.textContent=pswd;
var mail=document.getElementById("memail").value;
t3.textContent=mail;
var id=document.getElementById("masid").value;
t4.textContent=id;
var role=document.getElementById("mrole").value;
t5.textContent=role;


})