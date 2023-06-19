document.querySelector(".submi").addEventListener("click",function () {
     alert("Thank you for responding we will get back you soon");    
})
document.querySelector("form script").addEventListener("click",function () {
    document.querySelector("form script").classList.add("dinesh");
    setTimeout(() => {
        document.querySelector("form script").classList.remove("dinesh");
    }, 100);
})
