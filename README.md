# Milestone Project 2
## Check out my website [here](https://callendera.github.io/Milestone-Project-2/)
## Objective
My second Milestone Project is a website for a Non-Profit organization founded by myself and fellow LGBTQ+ community member Erin Munoz.
Our Organization is the Fayette County PRIDE Foundation. The organization is in the begining stages, so a website to gain community support and to get people involved is very important.
This project also displays the skills learned in the modules leading up to this project including:
HTML Fundamentals, CSS Fundamentals, User Centric Frontend Developement, JavaScript, and Interactive Frontend Developement.
By adding Javascript and Interactive Frontend Developement to my skill set, I have added to the user interactions within my site. 
Not only does the site have excellent UX, but it allows the user to interact and become involved in our Organization.
## Project Description and UX
The goal of this website is to provide a place where users can:
* Make Donations
* Learn about our organization
* Recieve event updates/See upcomming events
* Get Sponsorship details
* Discover our Social Media pages
* Submit Volunteer Application 
* Print Vendor Application
* Subscribe to our Quarterly News Letter

The site is fully functional on all screen sizes with extensive testing for each feature. The site is meant to have a minimalist aesthetic to give a modern feel.

* User Stories:
    * As someone who is interested in making a donation, I visit the organizations landing page. On that page there is an option to donate in the Navbar. 
    I click on the button and am redirected to the GofundMe page for Fayette County PRIDE where the user can make a donation.
    * I am interested in finding out about the organization and requesting more information. I visit the page and hit the 'About Us' option in the Navbar
    and am directed to the section that gives the organization's background and purpose for work. There is also an option to 'Learn More' that directs the user to the subscription form 
    that allows them to request more information. 
    After the user completes and submits the form they will see a message that says 'Sent!' after receiving the form the user will recieve an email from an organization member acknowledging the receipt of the subscription form and with the information requested. 
    * I am a user trying to check out upcoming events. Upon comming to the landing page I click on the Nav Link for 'Events' and am directed to the timeline that displays the events.
    From there the evnts are listed with dates and addresses. There is also a Google Map API that shows the user exactly where each event is being held. The user can also request event updates through the subsription form.
    * I am interested in becoming a volunteer for an event throught the organization. I come to the landing page and click the volunteer navigation and am directed to the volunteer application. 
    Upon completing and sending the application a message appears that says 'Sent!' upon recieving the form a member of the organization emails a confirmation of receiving the form. 
    Also, on the landing page, when you scroll another option to beome a volunteer is available. This option leads you to the same page, but includes a short snippet of text for the user to give context about volunteering for the organization.
    * I am a user that is interested in becoming a sponsor. After landing on the home page I select the sponsorship option in the Navbar and am directed to the subscription form where the user can request sponsorship information.
    Just like above, the user will fill out the form and send it. The message will appear that confirms the form is sent. The user will recieve an email from an organization member acknowledging the receipt of the subscription form and with the information requested.
    * I am a vendor who woud like to purchase a spot at an upcoming event. After coming to the landing page and scrolling down to the vendor application is available in a pinatble PDF version. A modal pulls up with an option to print the PDF.
    I click on the 'Print PDF' button and the PDF pulls up in the browser in a seperate tab.

### Original Mockup

![Original Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF.jpg)
 
### Revamped Mockup
 
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF1.png) 
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF2.png)
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF3.png)
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF4.png)
 
## Features

### Existing Features
* Navbar 
    * Fixed to the top for easy navigation 
    * Organization Logo in left corner
    * Includes: Home|Volunteer|About Us|Events|Sponsorship Each navigates you through the site in decending order
    * Donate button linked to GoFundMe page
    * Navigation links become a toggler in the mobile veiw and smaller screen sizes
* Volunteer, Vendor Application, Donate
    * These sets of divs are to allow the user to scroll through the options they have to get involved.
    * The image provides good UX for each section
    * The div containing the short context and button to "Learn More" either links the user to a PDF(vendor application), a second page within the site(volunteer application), or to the GoFundMe page(donations) 
        * Vendor Application - Available in PDF form only to provide an appropriate screening process for our vendors. Certain, specific, qualifications are very important to screen and need to be adequetly monitored according to the PDF specifications. 
        The form can then be emailed, or returned in person to an Executive Administrator.
        * Volunteer Application - This form can be submitted through the site on the volunteer.html page. Upon filling out the form and submitting it through the site, a confirmation message appears to confirm it is sent.
        * Donate - All donations are made through the GoFundMe page until further skill development has been aquired to do this solely through the site. 
* About Us
    * A short description of who we are as an organization with a group picture
    * Button that links to the subscription/more information jumbotron
* Events
    * This feature gives info about upcoming events
    * Tells when certain event tickets go on sale 
    * Google Map API is located just below that to show the user exactly where the events are being held
* Jumbotron
    * Subscription box to request information, get event updates, sponsorship details, or subsribe to our Quarterly News Letter.
    * After filling out the form and submitting it, a message pops up to confirm the form had been sent. 
    * The user will receive an email with the appropriate information shortly after submitting the form.
* Social links
    * Links to Facebook, Twitter, and Instagram are included that open into seperate tag.
    * Instagram is highlighted in this section to display out instagram photogallery. 
    * each image can be clicked and it will open that image in our instagram page to encourage the user to visit our instagram page.
* Footer
    * This area gives business creditials(501(c)3 non-profit organization), address/phone number, and our social links once again.
    * this encourages a user who is just looking for our contact information to scroll through the entire page and discover something they didn't know they were looking for.

### Features left to Implement 
* Donations
    * A feature i would like to implement after I gain the skill set for it is a way to make donations through the site itself.
* Purchase Event Tickets
    * April 20th, 2020 our tickets for the LGBTQ+ Gala will go on sale, I want to implement a way to purchase the tickets from our site. 

## Tools/Technologies
* [AWS Cloud9](https://c9.io/login)
    * Cloud9 hosted my Workspace for this project
* [Git](https://git-scm.com/)
    * used to push and commit any and all changes to my repository on GitHub
* [Bootstrap](https://getbootstrap.com/)
    * Provided my buttons, modal, carousel, Navbar, and basic grid structure 
* [JQuery](https://jquery.com/)
    * The project uses JQuery for DOM manipulation (Ex: Modal)
* [JavaScript](https://www.javascript.com/)
    * Google Map API, Email.js for form submission, and modal/bootstrap provided javascript

## Testing
### Automated Testing
* Validation Services
    * [W3C Markup Validator](https://validator.w3.org/) was used to validate my HTML code.
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate my CSS code.
    * [JS Fiddle](https://jsfiddle.net/api/post/library/pure/) was used to test my Email.js code for both of my forms.

### UX stories testing
* As a user I want to:
    * Make a Donation:
        * After coming to the landing page,
        * click the donation button 
        * perform the action through the GoFundMe page.
        * The page opens in a seperate tab.
        * You can also scroll down the landing page and come to another section with a button to open the GoFundMe.
        * it also opens into a seperate tab.
    * Find more information about the organization:
        * Upon landing on the home page,
        * click the About Us option in the Navbar
        * it takes you to the "Making History, Advocating for Change" section.
        * In that section there is a button
        * button says 'Learn More' which will direct the user to the subscribe form where they can request more specific info.
            * The subscribe form:
                * Has 4 boxes with placeholders that say First Name, Last Name, Email, and What are you looking for?
                * the form is sent to the email address associated with the email.js account
        * after filling out the form and submitting it,
        * the submit button says 'sending...' and then a message displays that says sent, 
        * if the form fails to send it says 'message send failure'
        * The email.js for the form does not fail! everything works perfectly.
        *  a return email is sent to the user telling them the message was received
    * Finding upcoming events
        * Come to the home page, use the events option in the Navbar
        * after being directed to the event timeline, the events are listed in chronological order. 
        * At the bottom of the timeline, there is a google map API that gives 3 markers to highlight where the events are being held
        * there is also an option (in the form of a button) to receive event updates.
        * this directs you to the subscribe form to request the event updates.
        * after filling out the form and submitting it,
        * the submit button says 'sending...' and then a message displays that says sent, 
        * if the form fails to send it says 'message send failure'
        * The email.js for the form does not fail! everything works perfectly.
        *  a return email is sent to the user telling them the message was received
    * Volunteering
        * After comming to the landing page and clicking the volunteer option in the navbar
        * the user is directed to a new page solely for the volunteer application. 
        * The Volunteer Application:
            * Has 8 input spaces for First Name, Last Name, Email, Address, Address 2, city, state, zip, and a Message that says "Why do you want to volunteer for Fayette County PRIDE Foundation? What event are you interested in?"
            * The button says 'Submit Application'
            * after filling out the form and submitting it,
            * the submit button says 'sending...' and then a message displays that says sent, 
            * if the form fails to send it says 'message send failure'
            * The email.js for the form does not fail! everything works perfectly.
            *  a return email is sent to the user telling them the message was received
    * Sponsorship details
        * After landing on the home page, click the sponsorship link in the navbar.
        * the link will direct you to the subscribe jumbotron to request the information you wanted.
        * after filling out the form and submitting it,
            * the submit button says 'sending...' and then a message displays that says sent, 
            * if the form fails to send it says 'message send failure'
            * The email.js for the form does not fail! everything works perfectly.
            * a return email is sent to the user telling them the message was received
    * Vendor Application
        * come to the landing page, scroll down tot the vendors section and click the button that says learn more
        * this opens a modal and the modal has an option to print PDF
        * when you click print PDF a seperate tab opens to present the PDF to be printed.
    * Checking out Social media 
        * After making it to the landing page 
        * scroll down to the social media section
        * there are links to each of our social media accounts.
        * each link opens into a seperate tab.
        * below that I am highlighting our Instagram account in a small photo gallery.
        * Those images are also linked to the individual post on our instagram page. 
        * they open into a seperate tab.















