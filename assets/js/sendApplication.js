var volunteerForm = $("form#volunteerForm");
volunteerForm.submit(function(event){
	event.preventDefault();

	var params = volunteerForm.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});


  var service_id = "outlook";

  var template_id = "subscribe";
  volunteerForm.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
       alert("Sent!");
       volunteerForm.find("button").text("Send");
     }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      volunteerForm.find("button").text("Send");
    });

  return false;
});



