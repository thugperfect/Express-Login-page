
const uname = document.getElementById('uname')
const passwd = document.getElementById("passwd")
const submit = document.getElementById("submit-btn")

const fetchData =async()=>{
    const data  = await fetch("/api/users")
    const usersData = await data.json()
    return usersData
}
const find =() =>{
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
    
        
    })
}




