let admin ={
 email:"ranu@gmail.com",
 name: 'Ranu'

}


let submit = async () => {
  let user_details = JSON.parse(localStorage.getItem("user_details"));
  let user = await getprofile(user_details.username, user_details.token);
  if (user.email !== admin.email) {
    alert("not valid");
    return;
  }

  let iteam = {
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    price: document.getElementById("price").value,
  };

  let res = await fetch(`http://localhost:3000/api/menu`, {
    method: "POST",

    body: JSON.stringify(iteam),

    //--> we are telling what type of data we are sending into local server
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
};

let getprofile = async (username, token) => {
  let res = await fetch(
    
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  return data;
};
