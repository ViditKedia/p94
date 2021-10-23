
var firebaseConfig = {
      apiKey: "AIzaSyBxSWjKczY5DYEhwnNHXGp8qFn68VtuYPk",
      authDomain: "kwitter-database-28f11.firebaseapp.com",
      databaseURL: "https://kwitter-database-28f11-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-28f11",
      storageBucket: "kwitter-database-28f11.appspot.com",
      messagingSenderId: "827514624277",
      appId: "1:827514624277:web:b4acbe347e490ac75bb11c"
    };

    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    console.log(user_name);
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";    
    console.log(user_name);

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose:"Use our Kwitter App"
          });
          localStorage.setItem("room_name" , room_name);
          
          window.location = "kwitter_page.html";
    }  

    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row; }); }); }

       getData();

       function redirectToRoomName(name) {
              console.log(name);
             localStorage.setItem("room_name", name);
             window.location = "kwitter_page.html"; }

             function logout() { 
             localStorage.removeItem("user_name"); 
             localStorage.removeItem("room_name"); 
             window.location = "index.html"; }