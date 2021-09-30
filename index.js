// const main_URL = "  http://localhost:3000/dogs";
// let formData = {
//   dogName: "Byron",
//   dogName: "Poodle",
// };
// const confirguration = {
//   method: "POST",
//   header: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };
// // -------------------
// fetch(main_URL)
//   .then((res) => res.json)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// const dogURL = "http://localhost:3000/dogs";
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// // method: "POST" is missing from the object below
// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };
// // DONT EVER FOR GET TO PASS CONFIRGURATION AS SECOND ARGUMENT
// fetch(dogURL, configurationObject)
//   .then((res) => res.json())
//   .then((object) => console.log(object))
//   .catch(function (error) {
//     alert("Something Went Wrong here");
//     console.log(error.message);
//   });
// Practice Test Using fetch POST;

function submitData(name, email) {
  const formData = {};
  formData.name = name;
  formData.email = email;
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let h1 = document.createElement("h1");
      h1.textContent = object.id;

      document.getElementById("add-Container").appendChild(h1);
    })
    .catch(function (error) {
      console.log(`Unauthorized Access ${error}`);
      let h1 = document.createElement("h1");
      h1.textContent = `Unauthorized Access ${error}`;
      document.getElementById("add-Container").append(h1);
    });
}
