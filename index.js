let add = document.querySelector("#add");
let list = document.querySelector("#list");
add.onClick = (e) => {
    console.log("oiess")
    e.prevertDefault();
    let listItem = document.querySelector("#listItem");

    if (listItem.value !== '') {
        let element = document.createElement("li");
        element.innerHTML = listItem.value;
        let removeElement = document.createElement("button");
        removeElement.className = "close";
        removeElement.innerHTML = "\u00D7";
        element.appendChild(removeElement);
        list.appendChild(element);
        listItem.value = "";
        element.addEventListener("click", (e) => {
            e.target.style.textDecoration = "line-through";

        })
        removeElement.addEventListener("click", (e) => {
            e.target.style.parseElement.style.display = "none";

        });

    } else {
        alert("No input\nWrite something!!");
    }
}