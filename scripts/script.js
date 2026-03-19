import { searchUser } from "./request.js";
import { createDataItem } from "./utils.js";

const buttonFetch = document.getElementById("btn-fetch");
const message = document.getElementById("message");
const userList = document.getElementById("user-list");

buttonFetch.addEventListener("click", async ()=> {
    try{
        message.textContent = '';

        const userData = await searchUser();

        if(!userData){
            message.textContent = "Erro na requisição. Tente novamente."
            message.style.display = "block";
            return;
        }

        const empty = document.getElementById("empty-state");
        
        if(empty) empty.style.display = "none";

        userList.innerHTML = '';

        createDataItem(userData.name.first, userData.dob.age, userData.location.country, userList);

    }catch(error){
        message.textContent = "Erro na requisição. Tente novamente."
        message.style.display = "block";
    }  
})