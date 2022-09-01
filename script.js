const  footer2 = document.querySelector(".footer2")
const arr1 = document.querySelector(".arr1")
const  footer3 = document.querySelector(".footer3")



arr1.addEventListener('click', ()=>{

    if (this.innerWidth < 700){
    footer2.style.display = "flex";
}

    if (this.innerWidth > 700){
        footer3.style.display = "flex";
    }
    
})

console.log(footer2)