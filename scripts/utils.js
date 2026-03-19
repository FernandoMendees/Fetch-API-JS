export function createDataItem(name, age, contry, list) {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Nome: ${name}`;
    nameSpan.classList.add("item-list");

    const ageSpan = document.createElement("span");
    ageSpan.textContent = `Idade: ${age}`;
    ageSpan.classList.add("item-list");

    const countrySpan = document.createElement("span");
    countrySpan.textContent = `País: ${contry}`;
    countrySpan.classList.add("item-list");

    li.appendChild(nameSpan);
    li.appendChild(ageSpan);
    li.appendChild(countrySpan);

    list.classList.add("user-list");
    list.appendChild(li);
}

export function updateMessageErro(messageElement, emptyState) {
    emptyState.style.display = "none";
    
    messageElement.textContent = "Falha na requisição. Tente novamente."
    messageElement.style.display = "block";
}