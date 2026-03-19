import { searchUser } from "./request.js";
import { createDataItem, updateMessageErro, updateButtonFetch} from "./utils.js";

const buttonFetch = document.getElementById("btn-fetch");
const message = document.getElementById("message");
const emptyState = document.getElementById("empty-state");
const userList = document.getElementById("user-list");


buttonFetch.addEventListener("click", async ()=> {
    buttonFetch.textContent = 'Carregando...';
     message.textContent = '';

    try{
        const userData = await searchUser();

        if (!userData) {
            updateMessageErro(message, emptyState);
            updateButtonFetch(buttonFetch)
            return;
        }

        setTimeout(()=> {  
            if(emptyState) emptyState.style.display = "none";

             userList.innerHTML = '';
            
            createDataItem(userData.name.first, userData.dob.age, userData.location.country, userList);
            updateButtonFetch(buttonFetch)

        }, 1000)

    } catch(error){
        updateMessageErro(message, emptyState)
        updateButtonFetch(buttonFetch);
    }
});