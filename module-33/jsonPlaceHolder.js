const loadData=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        
    })
}
function petsData(pets){
    window.location.href="./pet.html"
    }
   