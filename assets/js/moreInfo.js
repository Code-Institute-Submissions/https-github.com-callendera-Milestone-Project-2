// targets myform in index.html--in jumbotron
var myform = $("form#myform");
// tells what is to be submitted
myform.submit(function(event){
	event.preventDefault();
    // gives parameters within the form
	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

 // hwat service the form will be submitted to
  var service_id = "gmail";
    // email.js template id
  var template_id = "updates";
  // good ux for user to know when the form is sending and has been sent. a message pops up to confirmt the form was sent
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
       // in the event of an error the page will give a message explaining that error
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });

  return false;
});