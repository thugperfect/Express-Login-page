

const uname = document.getElementById('uname')
const passwd = document.getElementById("passwd")
const submit = document.getElementById("submit-btn")

const fetchData =()=>{
    submit.addEventListener("click",async(e)=>{
        e.preventDefault()
        const data  = await fetch("/api/users")
        const usersData = await data.json()
        let flag = false
      
        usersData.map((prop)=>{
     
          if(prop.uname === uname.value && prop.passwd === passwd.value)  {
            flag = true
         alert("Logged in")
          }
          
        })
        if(!flag ){
          alert("check uname or passwd")
        }
    })
   
}
fetchData()
const find =async() =>{
  console.log(usersData);
}




