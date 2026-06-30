const child = document.getElementById("child");
const parent = document.getElementById("parent");

parent.addEventListener("click", () => {
    console.log("Parent Capturing");
    true;
});

child.addEventListener("click", () => {
    console.log("Child Capturing");
    true;
});