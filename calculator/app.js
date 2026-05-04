let btns = document.querySelectorAll('.btn');
let show = document.querySelector(".show")
let clean=document.querySelector("#clean");

let str="";


let result=""

console.log(result);


    btns.forEach(btn =>{
        btn.addEventListener("click",(e)=>{
            if(e.target.innerText=="="){
                console.log(typeof str);
                console.log("equal button");
                console.log("str",str);
                result=eval(str);
                str=result.toString();
                show.innerText=str;
                
                console.log("after eval str",str);

            }else{
                console.log(e.target.innerText);
                str+=e.target.innerText;
                show.innerText=str;
            }


            
        })
    })

    clean.addEventListener("click",()=>{
        str="";
        show.innerText=0;
    })

