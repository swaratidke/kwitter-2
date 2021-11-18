var firebaseConfig = {
  apiKey: "AIzaSyDCvfZWhNKw4QIoa2xD-fE2xasKqL4Ntwk",
  authDomain: "kwitter-a732e.firebaseapp.com",
  databaseURL: "https://kwitter-a732e-default-rtdb.firebaseio.com",
  projectId: "kwitter-a732e",
  storageBucket: "kwitter-a732e.appspot.com",
  messagingSenderId: "1038095720660",
  appId: "1:1038095720660:web:475ae689170981768f9b41",
  measurementId: "G-V4EES4V62C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome "+user_name;
function addRoom(){
  room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
   purpose:"swara"
 });
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";

}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='RoomName(this.id)' >#"+Room_names+"</div><hr>";
       document,getElementById("output").innerHTML+=row;
    });
  });

}

getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

