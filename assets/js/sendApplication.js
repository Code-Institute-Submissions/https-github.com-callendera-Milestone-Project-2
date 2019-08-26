// targets volunteer application
var volunteerForm = $("form#volunteerForm");
volunteerForm.submit(function(event){
	event.preventDefault();

	var params = volunteerForm.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

    //service where form will be sent
  var service_id = "outlook";
//helps set parameters for the form in template id
  var template_id = "subscribe";
  // good ux for user to know when the form is sending and has been sent. a message pops up to confirmt the form was sent
  volunteerForm.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
       alert("Sent!");
       volunteerForm.find("button").text("Send");
     }, function(err) {
         //error message that will appear with an error
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      volunteerForm.find("button").text("Send");
    });

  return false;
});



