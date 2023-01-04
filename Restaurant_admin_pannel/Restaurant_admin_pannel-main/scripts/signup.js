async function Register() {
  
  let Register_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  let res = await fetch(
    
    {
     
      method: "POST",

      body: JSON.stringify(Register_data),

      
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);
}


async function login() {
  
  let login_data = {
    username: document.getElementById("fusername").value,
    password: document.getElementById("fpassword").value,
  };

  
  let user=login_data.username;

  let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    method: "POST",

    body: JSON.stringify(login_data),

    //--> we are telling what type of data we are sending into local server
    headers: {
      "Content-Type": "application/json",
    },
  });

  //--> passing this in get profile data
  

  savetoken(user,data.token,20000)


  let data = await res.json();
  console.log(data);
}




//-->making seassion storage means after a time letter seassion got expires
let savetoken = (username,token,time)=>{

  let user={
      username,
      token
  }

  localStorage.setItem('user_details', JSON.stringify(token));
  setTimeout(()=>{
   
      localStorage.setItem('user_details', JSON.stringify(null));
 

  },time)
}



