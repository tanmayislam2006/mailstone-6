const loadData=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        
    });
    
}
function petsData(pets){
    window.location.href="./pet.html"
    }
   

const data = async () => {
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}