const button = document.getElementById("button");

button.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("des").value;

    const ol = document.getElementById("list");
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = `${title}`;
    li.appendChild(p);

    ol.appendChild(li);


    document.getElementById("title").value = " ";
    document.getElementById("des").value = " ";


    


    
})