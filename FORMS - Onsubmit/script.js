function displayDetails() {
    if ("" == document.getElementById("name").value ||
        "" == document.getElementById("username").value ||
        "" == document.getElementById("password").value ||
        "" == document.getElementById("mobilenumber").value ||
        "" == document.getElementById("address").value) {
        document.getElementById("register").addEventListener("click", function (event) {

            event.preventDefault()
        });


    }
    else {
        document.getElementById("rname").innerHTML = "Name: " + document.getElementById("name").value;
        document.getElementById("rusername").innerHTML = "User Name: " + document.getElementById("username").value;
        document.getElementById("rmobile").innerHTML = "Mobile Number: " + document.getElementById("mobilenumber").value;
        document.getElementById("raddress").innerHTML = "Address: " + document.getElementById("address").value;
    }

}