const button = document.getElementById("btnBuscar");

const nameUser = document.getElementById("nome");
const emailUser = document.getElementById("email");
const telephoneUser = document.getElementById("telefone");

button.addEventListener("click", async() => {
    try {
        const response = await fetch("https://randomuser.me/api/");

        if(!response.ok){
            alert(response.status);
            return;
        }

        const data = await response.json();
        const user = data.results[0];

        nameUser.textContent = user.name.first;
        emailUser.textContent = user.email;
        telephoneUser.textContent = user.phone;
    
    }catch(error){
        alert(error);
    }
})

