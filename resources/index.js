

const uname = document.getElementById('uname').value
const passwd = document.getElementById("passwd").value
const submit = document.getElementById("submit-btn")

const find =() =>{
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(uname,passwd);
    })
}




