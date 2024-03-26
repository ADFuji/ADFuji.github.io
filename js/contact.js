const serviceID = "service_213mvog";
const template = "template_iorj486";
const publicKey = "cR5oQXU37EEXD133n";

const submit = document.getElementById("submit");

submit.addEventListener("click", function(event){
    event.preventDefault(); // Empêche le comportement par défaut du clic
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name == "" || email == "" || message == ""){
        alert("Veuillez remplir tous les champs");
        return;
    }
    else {
        emailjs.send(serviceID, template,{
            from_name: name,
            to_name: email,
            message: message,
            reply_to: "uwu"
        }, publicKey)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
        }, (err) => {
            console.log("FAILED...", err);
        });
        submit.removeEventListener("click", this);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
});