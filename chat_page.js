var firebaseConfig = {
      
      apiKey: "AIzaSyBN4MiSNhu-rRR7qV0YwM1PZITdAQ0cYY0",
      authDomain: "materials-fbf48.firebaseapp.com",
      databaseURL: "https://materials-fbf48-default-rtdb.firebaseio.com",
      projectId: "materials-fbf48",
      storageBucket: "materials-fbf48.appspot.com",
      messagingSenderId: "77922386379",
      appId: "1:77922386379:web:fe0fd606fca4dc337cb64e",
      measurementId: "G-8VX6LHTKNS"};
      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({name:user_name,message:msg});
    document.getElementById("msg").value="";
    }
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
    name = message_data['name'];
    message= message_data['message'];
    name_with_tag="<h4>"+name+"</h4>";
    message_with_tag="<h4 class='message_h4'> "+message+"</h4>";
    
    
    row= name_with_tag+message_with_tag;
    document.getElementById("output").innerHTML+=row;
    //End cod
          } });  }); }
    getData();
    
    function logout(){
    
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }