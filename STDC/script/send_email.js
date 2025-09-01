function sendMail(){
     let select = document.getElementById("reason"); 
    
    let params = {
        name: document.getElementById("name").value,
        designation: document.getElementById("designation").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        reason: select.options[select.selectedIndex].text,
        query: document.getElementById("query").value
    };

    emailjs.send("service_k8ol9z6","template_oz5jvm8",params).then(alert("Success! Your query has been sent successfully!"),function(err){
        console.log(err);
    });
}