// Get a reference to the database service
var database = firebase.database();

console.log('Call Database');
database.ref("building/").once('child_added', function (snapshot) {
    var count = Object.keys(snapshot).length;
    console.log('data size -> ' + count);
    
    snapshot.forEach(function (data) {
        console.log(data.val());
    }); 
});

    
// console.log(database.ref('/building/diagram-a'))