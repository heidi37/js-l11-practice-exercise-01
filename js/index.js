const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");


const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    // assign the array where the results live to a variable
    const userResults = data.results;
    // call the display users function
    displayUsers(userResults);
};
// call the get Data function to get data for 5 users
getData(1);

// results data array passes to this function
const displayUsers = function (userResults) {
    //make sure div where users showed is cleared
    randomFolks.innerHTML= "";
    for(const user of userResults){
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        //create a new div
        const userDiv =document.createElement("DIV");
        //put this HTML in the div
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
        `;
        //add the div to this parent element
        randomFolks.append(userDiv);
    }
};


selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    console.log(numUsers);
    getData(numUsers)
});








