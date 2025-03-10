const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(response => response.json())
        .then(data => {

            petsData(data.pets)
        })
}
function petsData(pets) {
    const accessParent = document.getElementById("push-cointainer")
    for (const pet of pets) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="shadow-sm p-3 border border-bordercolor rounded-lg">
            <!-- image  -->
            <div class="rounded-lg"><img src=${pet.image} alt=""></div>
            <!-- text content  -->
            <div class="my-3 ">
                <h3 class="font-bold text-lg">${pet.breed}</h3>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/diversity.png" alt="">Breed : <span id="bread-name">${pet.breed}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt="">Birth: <span id="date-of-birth">${pet.date_of_birth}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/gender.png" alt="">Male : <span id="male-info">${pet.gender}</span></p>
                <p class="my-3 text-gray-500 flex gap-2">$ Price : <span id="price-info">${pet.price}</span></p>
            </div>
            <!-- button  -->
            <div class="my-3 flex justify-center my-3 border-t-2 pt-5 gap-4 ">
                <button class="border rounded-lg py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </button>
                <button class="text-primary border px-2 py-1 rounded-lg">Adopt</button>
                <button onclick="details(${pet.petId})" class="text-primary border px-2 py-1 rounded-lg">Details</button>
            </div>
        </div>`;
        accessParent.append(div);
    }
}