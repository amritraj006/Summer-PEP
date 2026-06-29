const form = document.getElementById("todoForm");
const titleInput = document.getElementById("title");
const desInput = document.getElementById("des");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = desInput.value.trim();

    if (!title || !description) {
        alert("Title and Description cannot be empty!");
        return;
    }

    const li = document.createElement("li");

    const heading = document.createElement("h3");
    heading.textContent = title;

    const para = document.createElement("p");
    para.textContent = description;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.append(heading, para, deleteBtn);
    list.appendChild(li);

    form.reset(); 
});