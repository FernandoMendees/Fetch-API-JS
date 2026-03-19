export async function searchUser(){
    try{
        const response = await fetch("https://randomuser.me/api/");

        if(!response.ok) {
            console.log("Erro: ", response.status);
            return null;
        }

        const data = await response.json();
        
        return data.results[0];

    }catch(error) {
        console.log(error);
        return null;
    }
}
