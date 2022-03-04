var firebaseConfig = {
      apiKey: "AIzaSyBN4MiSNhu-rRR7qV0YwM1PZITdAQ0cYY0",
      authDomain: "materials-fbf48.firebaseapp.com",
      databaseURL: "https://materials-fbf48-default-rtdb.firebaseio.com",
      projectId: "materials-fbf48",
      storageBucket: "materials-fbf48.appspot.com",
      messagingSenderId: "77922386379",
      appId: "1:77922386379:web:fe0fd606fca4dc337cb64e",
      measurementId: "G-8VX6LHTKNS"
    };
    
    
    firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+ user_name ;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
     
      });});}
getData();

function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});

      localStorage.setItem("room_name", room_name);
      window.location="chat_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chat_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="chat.html";
}