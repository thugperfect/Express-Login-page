

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
      
          if(prop.uname === uname.value && prop.passwd === uname.passwd)  {
           console.log(true);
          }
          
        })
    })
   
}
fetchData()
const find =async() =>{
  console.log(usersData);
}




