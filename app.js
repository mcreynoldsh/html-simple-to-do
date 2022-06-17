function myFunction(checkBox){
    
    var checkItem = checkBox.nextSibling.nextSibling
    
    if (checkBox.checked){
        checkItem.classList.add("strike-through") 
    }
    else{
        checkItem.classList.remove("strike-through")
    }
}
function myNewFunction(checkBox){
    
    var checkItem = checkBox.nextSibling
    
    if (checkBox.checked){
        checkItem.classList.add("strike-through") 
    }
    else{
        checkItem.classList.remove("strike-through")
    }
}
const handleFormSubmit = (evt) => {
    evt.preventDefault() 
    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);
    addList(formData.get("itemInput"))
}
function addList(name){
    var ul = document.getElementById("list")
    var li = document.createElement("li")
    ul.appendChild(li)
    li.setAttribute("class", "list-group-item")
   
    var newCheckBox = document.createElement("input")
    li.appendChild(newCheckBox)
    newCheckBox.setAttribute("type","checkbox")
    newCheckBox.setAttribute("class","form-check-input me-1")
    newCheckBox.setAttribute("onchange","myNewFunction(this)")
    var span= document.createElement("span")
    span.setAttribute("class", "p")
    li.appendChild(span)
    span.insertAdjacentText("afterbegin", name)

}