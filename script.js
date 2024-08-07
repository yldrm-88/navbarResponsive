//let menuList=document.getElementById("menuList")
//menuList.style.maxHeight="0px";

//function toggleMenu(){
   // if(menuList.style.maxHeight == "0px"){
        //menuList.style.maxHeight = "300px";
    //}else{
    //    menuList.style.maxHeight = "0px" 
   // }    
//}


document.addEventListener
('DOMContentLoaded',()=>{
    const menuList=document.getElementById("menuList");
    const menuIcon=document.querySelector(".menu-icon i");
    menuList.style.maxHeight="0px";

    menuIcon.addEventListener('click',()=>{
        if(menuList.style.maxHeight=="0px"){
            menuList.style.maxHeight="300px";
        }
        else{
            menuList.style.maxHeight="0px";
        }
    });
}); 