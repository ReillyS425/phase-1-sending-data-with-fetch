
function submitData(name, email) {
   return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function (response) {
return response.json();
    })
    .then(function (object) {
     const newID = object.id;
     const createdElement = document.createElement("p");
     createdElement.textContent = `New ID: ${newID}`
     document.body.appendChild(createdElement)
    })
    .catch(function (error) {
        const createdElement2 = document.createElement("p");
        const  errorMessage = `sorry ${name}! An error has occured! Unauthorized Access`;
        createdElement2.textContent = errorMessage;
        document.body.appendChild(createdElement2);
    });
}







