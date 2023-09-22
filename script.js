console.log("File attachment is successful!");


{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // ** Your web app's Firebase configuration ** 👈 This is important!
  const firebaseConfig = {
    apiKey: "AIzaSyAT5u1iKGaJDuKh5zaByzISF9NZShRLP0Y",
    authDomain: "from-data-submission.firebaseapp.com",
    databaseURL: "https://from-data-submission-default-rtdb.firebaseio.com",
    projectId: "from-data-submission",
    storageBucket: "from-data-submission.appspot.com",
    messagingSenderId: "23464150976",
    appId: "1:23464150976:web:e8d0587c6ce2df5a25ea25"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script> */}

// storageBucket and databaseURL is important inside in the following object!! 
const firebaseConfig = {
    apiKey: "AIzaSyAT5u1iKGaJDuKh5zaByzISF9NZShRLP0Y",
    authDomain: "from-data-submission.firebaseapp.com",
    databaseURL: "https://from-data-submission-default-rtdb.firebaseio.com",
    projectId: "from-data-submission",
    storageBucket: "from-data-submission.appspot.com",
    messagingSenderId: "23464150976",
    appId: "1:23464150976:web:e8d0587c6ce2df5a25ea25"
};

// Initialization of the firebase database!
firebase.initializeApp(firebaseConfig);

// to create the database and catch the coming data from it in the object we need to define it!
const myformDB = firebase.database().ref("myDb");


let form = document.getElementById("myForm");
form.addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

    let username = getElementsValue("username");
    let useremail = getElementsValue("useremail");

    saveMessages(username, useremail);

    [username, useremail].forEach(console.log);
}

const saveMessages = (username, useremail) => {
    var newData = myformDB.push();

    newData.set({
        useremail,
        username
    });
}

const getElementsValue = (id) => {
    return document.getElementById(id).value;
}


// fetching data from db.
const databaseURL = "https://console.firebase.google.com/project/from-data-submission/database/from-data-submission-default-rtdb/data/~2F";

const firebaseApiKey = "AIzaSyAT5u1iKGaJDuKh5zaByzISF9NZShRLP0Y";

const path = "/myDb";
const url = `${databaseURL}${path}.json?auth=${firebaseApiKey}`;
// Make the GET request
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data here, e.g., update your UI or perform other operations
        console.log("fetched data is: ", data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Fetch error:', error);
    });