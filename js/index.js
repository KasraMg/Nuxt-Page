let body= document.querySelector('body')
let a = document.querySelectorAll('a') 
let toggle_btn =document.querySelectorAll('.toggle_btn')
const loader =document.querySelector('.loader')

 toggle_btn.forEach(toggle=>{
  toggle.addEventListener('click',(button)=>{
       
    console.log(button);
    body.classList.toggle('body-white')
   

    a.forEach(item=>{
        item.classList.toggle('c-dark')
    })
    
   })



 })
   
 
 window.addEventListener('load',()=>{
    loader.style.display='none'
    window.scrollTo(1,1)
 })

 if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((regiter) => {
      console.log("Registered Successfylly => ", regiter);
    })
    .catch((err) => console.log(err));
} else {
  console.log("Not Support");
}

 