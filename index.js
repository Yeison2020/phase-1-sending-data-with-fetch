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
const main_URL = "http://localhost:3000/users";

function submitData(name, email) {
  const formData = {};
  formData.name = name;
  formData.email = email;
  const configurations = {
    method: "POST",
    header: {
      "content-type": "application/json",
      Accept: "Object/user-email",
    },
    body: JSON.stringify(formData),
  };

  return fetch(main_URL, configurations)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`Unauthorized Access:  ${error}`));
}
