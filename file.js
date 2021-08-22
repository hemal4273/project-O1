document.getElementById("ip").addEventListener("click",()=>{
    let ok=document.getElementById("s1");
    ok.classList.toggle("cd");
    let ok3=document.getElementById("s3");
    ok3.classList.toggle("ef");
    let ok2=document.getElementById("s2");
    ok2.classList.toggle("gh");
    let ok4=document.getElementById("hp");
    ok4.classList.toggle("abc");
})







// ##### form coding #######

let myfunc = ()=>{
    let a = document.getElementById("uname").Value;
    let c = document.getElementById("upass").Value;
    let b = document.getElementById("uemail").Value;

    let e = b.indexOf("@");
    let d = b.lastIndexOf(".");



    if ((a === "")  || (a === null)){
        document.getElementById("name-error").innerHTML =  "** name can't be blank";
        document.getElementById("name-error").style.color = "red";
        return false;
    }
    else if (a.length<=3 || a.length>=26){
        document.getElementById("name-error").innerHTML = "** user name minimum 3 and maximum 26";
        document.getElementById("name-error").style.color = "red";
        return false;
    }

    else if (e<2 || d<e+2 || d+2>e.length){
        document.getElementById("email-error").innerHTML = " ** Enter valid email address";
        document.getElementById("email-error").style.color = "red";
        return false;
        
    }

    else if (c === ""){
        document.getElementById("pass-error").innerHTML = "password can't be blank";
        document.getElementById("pass-error").style.color = "red";
        return false;
    }

    else if (c.length<6){
        document.getElementById("pass-error").innerHTML = "password minimum 8 character";
        document.getElementById("pass-error").style.color = "red";
        return false;
    }
    else{
        document.getElementById("done").innerHTML = "successfully done";
        return true;
    }

}




