// let str="Cavid Nursultan Togrul";

// function letterCount(str){
//     let result={};
//     for (const letter of str) {
//         if(result[letter]===undefined){
//             result[letter]=1;
//         }else{
//             result[letter]+=1;
//         }
//     }
//     return result;
// }

// console.log(letterCount(str));

//DOM
// console.log(document.getElementById("btn"));
// console.log(window);

// document.getElementById("btn").onclick=function(){
//     alert("basma")
// }

// let btn=document.getElementById("btn");
// console.log(btn);
// let buttons=document.getElementsByClassName("hello");
// console.log(buttons);

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick=function(){
//         alert(this.innerText)
//     }
// }

// [...buttons].forEach(button=>{
//     button.onclick=function(){
//         alert(this.innerText)
//     }
// })

// console.log();

// document.getElementsByTagName("button")[0].onmouseenter=function(){
//     this.style.backgroundColor="red";
// }

// document.getElementsByTagName("button")[0].onmouseleave=function(){
//     this.style.backgroundColor="cyan";
// }

// console.log(document.querySelector(".hello"));
// console.log(document.querySelectorAll(".hello"));

// let btnRemove=document.getElementById("btn_remove");

// btnRemove.onclick=()=>{
//     document.querySelector("#numbers").innerHTML="";
    // document.querySelector("#numbers").remove();
    // let children=document.getElementById("numbers").children;
    // let children=document.querySelectorAll("#numbers li");

    // for (let i = 0; i < children.length; i++) {
    //     children[i].remove();
        
    // }
// }


// document.querySelector("p").innerHTML="<i>Subhan</i>";

// document.querySelector("input").value="P202 deyil"

// let btn=document.getElementById("btn");

// btn.onclick=function(){
//     console.log("first click")
// }


// btn.addEventListener("click",function(){
//     console.log("listener click")
// });

// btn.onclick=function(){
//     console.log("second click")
// }

// btn.addEventListener("click",function(){
//     console.log("second listener click")
// });


// let avgLi=document.getElementById("avgLi");

// console.log(li.parentElement.parentElement.parentElement);
// console.log(ul.children);
// console.log(ul.nextElementSibling);
// console.log(avgLi.parentElement.parentElement.nextElementSibling);

let h1=document.querySelector("h1");
let changeBtn=document.querySelector("#changeBtn");
// h1.className="fromMySide"
// console.log(h1.className);
// h1.classList.add("fromMySide")
// h1.classList.remove("test")
// console.log(h1.classList);

// changeBtn.onclick=function(){
//     h1.classList.toggle("color")
// }
// h1.setAttribute("id","h1");
// h1.removeAttribute("class")
// console.log(h1.hasAttribute("class"));
// console.log();
