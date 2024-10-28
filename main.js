const item = document.querySelector("#item")
const toDobox=document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addtodo(this.value);
            this.value="";
        }
    }
)

const addtodo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = ` ${item}
    <i class="fa-solid fa-xmark"></i> `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");   //toggle mean add and renove this class
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
toDobox.appendChild(listItem);
}