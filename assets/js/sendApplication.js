function sendMail(volunteerForm) {
    emailjs.send("outlook", "subscribe", {
        "from_name": volunteerForm.fullname.value,
        "from_email": volunteerForm.emailaddress.value,
        "subscriber_message": volunteerForm.subscribermessage.value,
        
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
