// get gallary variable
let gallary = document.getElementById("gallary");
// pokemon id range 1-1017
// generate random number from 1-1017
function generateString(min, max){
    return Math.floor(Math.random(1)*(max - min +1)) +min;
} 

// for-loop
for (let i = 0; i < 3; i++){
    let idNum = generateString(1,  1017)
    console.log(idNum.toString());
    let pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" 
    let url = pokemonUrl.concat(idNum.toString()) 
    console.log(url)
    fetch(url)
    .then(function(response){
        console.log(response);
        return response.json();
    }) 
    // Getting the Data From the API
    .then(jsonData => {
        //console.log("Data from API," +JSON.stringify(jsonData.sprites.front_default))
        //console.log("Data from API," +JSON.stringify(jsonData.name))
    // attach image to div
        const creative = document.createElement('img');
        creative.src = jsonData.sprites.front_default;
        creative.classList.add("creative")  
        creative.addEventListener("click", function(event){
            event.preventDefault();
            let myEvent = event
            let idNum = generateString(1,  1017) 
            //console.log(idNum.toString());
            let pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" 
            let url = pokemonUrl.concat(idNum.toString())  
            //console.log(url)
            fetch(url) 
            .then(function(response){
                //console.log(response);
                return response.json();
            }) 
            // Getting the Data From the API
            .then(jsonData => {
                console.log(myEvent)
                myEvent.target.src = jsonData.sprites.front_default;
                myEvent.target.nextElementSibling.innerText = jsonData.name;
            //console.log("Clicked")
            })
        })
        gallary.appendChild(creative);
    // attach name to image
        let listItem = document.createElement("p");
        listItem.innerText = jsonData.name;
    listItem.classList.add("creative") 
        gallary.appendChild(listItem);
    })
} 

