let string="";
var len=document.querySelectorAll(".buttons").length;
for (var i=0;i<len;i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click",function(e){
        if (e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="c"){
            string="";
            document.querySelector("input").value=string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
       
    });
}

