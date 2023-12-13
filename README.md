# TheShop

<img src="src/assets/screenshot-am-I-responsive.png" alt="Am I responsive">

ProClimbers is a shop where end users can purchase climbing shoes and, in the future, other outdoor equipment. In this project, the user mainly refers to the shop owner or the admin. There are three different roles in total:

    The shop owner or their employees,
    Logged-in customers with an account, and
    Visitors who are not logged in.

Visitors who are not logged in can browse the products in the shop, but they do not have access to CRUD functionality. Logged-in customers can place orders and pay for them in the shop, creating order objects. Shop employees, on the other hand, have full CRUD functionality at their disposal.

The Project can be seen [here](https://the-shop-fe-75bf1203be46.herokuapp.com/)


## User Stories

- **Navigation & Authentication**
  - Navigation: As any kind of user, I can view a navbar from every page so that I can navigate easily between pages.
  - Routing: As any kind of user, I can navigate through pages quickly so that I can view content seamlessly without page refresh.
  - Authentication - Sign up: As a visitor I can create a new account so that I can access all the features for signed up         customers
  - Authentication - Sign in: As a customer or employee I can sign in to the app so that I can access functionality for logged in users
  - Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
  - Authentication - Refreshing access tokens: As a user I can maintain my logged-in status for 31 days to be able to choose to log out so that my user experience is not compromised
  - Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
  - As an employee i can navigate to the shop's andministration order dashboard, so that I can view all the orders and there status
  - As an employee i can navigate to the shop's andministration product dashboard, so that I can view all offering of Proclimbers
  - As a customer I can navigate throug the ordering process, so that I can order products and pay them. 


- **The Home Page**
    - As any kind of user, I can search for products with keywords, so that I can find the products with this keyword 
    - As any kind of user, I can click on a product, so that I get get more information about it. 
    

- **The Product Detail Page**
    - As a logged in customer, I can view the properties page so that I can read the information about the property
    - As a logged in customer, I can write comments and rate the product so that other customer can get motivated to buy the product too.
    - As a logged in customer, I can add the product to my cart here, so that I can view my order there.

- **The Cart Page**
    - As a logged in customer, I can view my order, so that I can get all information about the the quantity and the price of my order.
    - As a logged in customer, I can delete my order, so that I can make my cart empty
    - As a logged customer, I can edit the amount of the product, so that I can choose to buy more or less of the product
    - As a loggedcustomer, I can navigate to paying process, so that I can buy the product.

- **The Admin Dashboards**
    - As a shopowner, I can navigate to the admin dashbords for user, orders and products, so that I can navigate from here to the edit/update pages
    - As a shopowner, I can click the delete button, so that I can delete products, orders and user 
    - As a shopowner, I can view all user, products and orders, so that I can get all the information I need

- **The Edit Pages**
    - As a shopowner, I can change attributes of products, so that visitors see other prices, images, ...
    - As a shopowner, I can create products, so that users can buy tham.
    - As a shopowner, I can edit user, so that they have admin status (if they are employees) or different email adresses.
    - As a shopowner, I can view orders, so that I can navigate to the status Information.
    - As a shopowner, I can chnge the order status, so that the order shows up as dilivered.

- **The Edit Pages**
    - As a logged user, I can view my user information, so that I can change them.
    - As a logged user, I can view my orders, so that I can get status information.






## Features 

- __Header__

    - The header contains the TheShop logo which is a link to the home webpage. The header also contanis the user image or a default avatar. The links to the SignIn SignOut and profilePages are also included here.
    - The header has a fixed position and can be seen on all  webpages at the top of the browser window. 
    - On small screens the header collapes to the logo and a dropdrown burger button.
    - The header tells the user the name of the company and clearly guides the user to all the points that interest them. 
     - Header Images
          <img src="src/assets/screenshot-header.png" alt="Header">

       

  - __The Sidebar__ 

  - The sidebar section includes links to create update delete properties. Also links to filter properties and the property detail view. 
  - The sidebar is colapsible on click and can just be used by loggedin users.

- Sidebar

  <img src="src/assets/screenshot-sidebar.png" alt="Sidebar">
  <img src="src/assets/screenshot-sidebar-open.png" alt="sidebar-open">


### The Homepage

- The homepage is the starting page where you can see all properties in three columns. You can scroll down here and click on individual properties to get detailed information. Additionally, you can also view filtered search results here.
- On smaller screens, you will see only one column instead of three.

    - Landing Page Images
<img src="src/assets/screenshot-landingpage.png" alt="Landing">



### The Property Page

- On the property page, you can access additional information about the property and view an enlarged image.
- Here, you can express your interest and make purchase inquiries.
- If you are the creator of the property, you can edit or delete it here.

   - Property page
   <img src="src/assets/screenshot-propertypage.png" alt="Property">




### Profile Page

- This page shows all properties the user has created.
- Here other user can show that they are interested in a property of the this user.
- If the user is the owner of this profile, the user can edit the profile here.

  - Profile page
  <img src="src/assets/screenshot-profilepage.png" alt="Profile">


### User-Settings Page

- Here the user can change some of his personal data. He can change the username, password and his avatar. 

    - User Settings Image
  <img src="src/assets/screenshot-edit-form.png" alt="User-Settings">


## Create - Update - property


### Update-property Page

- If the user has created a property, they can then update it. By clicking 'edit' on the property, they can change the title and all the other attributes. Additionally, they can change the property status from available to sold and vice versa. 


### 404 Page

- If the user clicks on a link that goes nowhere, they will be directed here.
     - 404 page
    <img src="src/assets/screenshot-404.png" alt="404">



## Login - Sign Up - Page

- All three pages have been taken over and modified by Ci Moments Project.


### The Login Page

  - This page will allow the user to log in to his or her account. If the user has not yet registered, he can do so here. No user can log in without having registered. There is a link to the signup page.
  - The User can log in with username and password.

  - Login
  <img src="src/assets/screenshot-signin.png" alt="Log-In">


### The Sign Up Pages

  - In the SignUp page, the username and password must be provided. The password must be confirmed afterward. 
  

  - Sign Up
  <img src="src/assets/screenshot-signup.png" alt="Sign Up">


## Features Left to Implement

  - Planned features: 
    - In the future, the user will be able to add additional images to their property.
    - TheShop administrator will have a dashboard with statistics on sales, preferred locations, and other data.



## Testing 

- I have manually tested the program in the Code institute Heroku terminal and in my local terminal.by doing the following:
    - I have tested that the website works in different browsers (Chrome and Firefox).
    - I confirm that the website works and looks good on all standard screen sizes. This was tested with the devtools divice toolbar.
    - I confirm that the all forms are working.
    - I confirm that the the user can create, edit and delete properties and inquiries.


    

### Validator Testing


  - HTML
      - No errors were returned when passing through the official W3C validator.
      - All web pages have been tested.

  - CSS
      - No errors were found when passing through the official (Jigsaw) validator.

  - JavaScipt
      - No errors were found when passing through the JSHint validator.
        

  - Accessibility
      - I confirm that the colors and fonts selected are easy to read and accessible. This was discovered using lighthouse in devtools.
      - All web pages have been tested for desktop and mobil devices.

- HTML Validation
<img src="src/assets/screenshot-html-val.png" alt="HTML-Val">

- CSS Validation
<img src="scr/assets/screenshot-css-val.png" alt="CSS Validation">

- JSX Validation
    - with ES-Linter


- Lighthouse
<img src="scr/assets/screenshot-lighthouse.png" alt="Lighthouse">




### Unfixed Bugs

 - No Bugs are unfixed.
 - But functions that have to be solved better in the future.
    - In the future, the user will log in with an e-mail address.
    - Other users will see whether you are online or not.nearby and use the link to further information about her/him.


## Deployment

The project was deployed using Code institut's mock for Heroku

    Steps for deployment:
        This repository was cloned.
        A Herroku app was created.
        Added config vars for the secret key, for cloudinary and for the posgresql database.
        The Heroku app was linked to the repository
        Deploy was clicked.

The live link can be found [here](https://the-shop-fe-75bf1203be46.herokuapp.com/)


## Credits 

### Content

- Instructions on how to structure full stack projects, how to work with databasis, how to use Django, Postgresql and Cloudinary, Summernote and Allauth are from [Code Institute - Moments and drf](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/)
[and](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+DRF+2021_T1/courseware/f775d54df4da44d18309888b3fe884f7/bc5fbada70104d489aa0363a03d8bda8/)
- All icons were taken from [Font Awesome](https://fontawesome.com/)
- Font styles were taken from [Google Fonts](https://fonts.googleapis.com)
- The code of the header dropdown menu is taken from Bootstrap. [Bootstrap](https://getbootstrap.com/docs/4.1/components/navbar/)
- The all HTML structures are from Bootrap. [Bootstrap](https://getbootstrap.com/docs/4.1/layout/grid/)
- Instructions on how to buils a sidebar in react are from [Youtube](https://www.youtube.com/watch?v=5R9jFHlG6ik&t=11s)
- The Basic Project idea is from [Youtube](https://www.youtube.com/watch?v=jx5hdo50a2M&t=3301s)

- Color-Scheme
  <img src="src/assets/color-scheme.png" alt="Color Scheme">

### Media

- The Images used on all pages are from this open Source site [Pixabay](https://pixabay.com/de/)
- All Images are stored in the Cloudinary platform.
- The Logo was made with [Canva](https://www.canva.com/create/logos/)


### Personal Advice

  - Thank You!
    -  Jubril Akolade
    - All people from my Slack Group!