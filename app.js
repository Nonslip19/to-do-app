const inputDiv = document.querySelector(".inputDiv");
const input = document.getElementById("input");
const button = document.getElementById("button");
const contentDiv = document.querySelector(".contentDiv");

var count = 0;
button.addEventListener("click", go);

input.addEventListener("keyup", function(e) {
    if(e.keyCode == "13"){
        go();
    }
})

function go(){
    if (input.value != "") {
        count++;
        var paragraf = document.createElement('p');
        var deleteButton = document.createElement("div");
        var finishButton = document.createElement("div");
        deleteButton.classList.add("deleteButton");
        finishButton.classList.add("finishButton");
        deleteButton.innerText = "X"
        finishButton.innerText = "✔"
        paragraf.innerText =count + ") " + input.value;
        contentDiv.appendChild(paragraf);
        contentDiv.appendChild(paragraf);
        paragraf.appendChild(deleteButton);
        paragraf.prepend(finishButton);
        input.value = "";

        deleteButton.addEventListener("click", function() {
            count--;
            contentDiv.removeChild(paragraf);
        });

        finishButton.addEventListener("click", function(){
            paragraf.classList.toggle("deneme"); 
        });
    }
   
}
