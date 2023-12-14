# ProClimbers

<img src="src/assets/screenshot-am-I-responsive.png" alt="Am I responsive">

ProClimbers is a shop where end users can purchase climbing shoes and, in the future, other outdoor equipment. In this project, the user mainly refers to the shop owner or the admin. There are three different roles in total:

    The shop owner or their employees,
    Logged-in customers with an account, and
    Visitors who are not logged in.

Visitors who are not logged in can browse the products in the shop, but they do not have access to CRUD functionality. Logged-in customers can place orders and pay for them in the shop, creating order objects. Shop employees, on the other hand, have full CRUD functionality at their disposal.

<!-- The Project can be seen [here](https://---.herokuapp.com/) -->


## User Stories

- **Navigation & Authentication**
  - Navigation: As any kind of user, I can view a navbar from every page so that I can navigate easily between pages.
  - Routing: As any kind of user, I can navigate through pages quickly so that I can view content seamlessly without page refresh.
  - Authentication - Sign up: As a visitor, I can create a new account so that I can access all the features for signed-up customers.
  - Sign in: As a customer or employee, I can sign in to the app so that I can access functionality for logged-in users.
  - Logged in Status: As a user, I can tell if I am logged in or not so that I can log in if I need to.
  - Refreshing access tokens: As a user, I can maintain my logged-in status for 31 days to be able to choose to log out so that my user experience is not compromised.
  - Conditional rendering: 
    - As a logged-out user, I can see sign in and sign up options so that I can sign in/sign up.
    - As an employee, I can navigate to the shop's administration order dashboard, so that I can view all the orders and their status.
    - As an employee, I can navigate to the shop's administration product dashboard, so that I can view all offerings of Proclimbers.
    - As a customer, I can navigate through the ordering process, so that I can order products and pay for them. 

- **The Home Page**
    - As any kind of user, I can search for products with keywords, so that I can find the products with this keyword.
    - As any kind of user, I can click on a product, so that I can get more information about it. 

- **The Product Detail Page**
    - As a logged-in customer, I can view the properties page so that I can read the information about the property.
    - As a logged-in customer, I can write comments and rate the product so that other customers can get motivated to buy the product too.
    - As a logged-in customer, I can add the product to my cart here, so that I can view my order there.

- **The Cart Page**
    - As a logged-in customer, I can view my order, so that I can get all information about the quantity and the price of my order.
    - As a logged-in customer, I can delete my order, so that I can make my cart empty.
    - As a logged-in customer, I can edit the amount of the product, so that I can choose to buy more or less of the product.
    - As a logged-in customer, I can navigate to the payment process, so that I can buy the product.

- **The Admin Dashboards**
    - As a shop owner, I can navigate to the admin dashboards for users, orders, and products, so that I can navigate from here to the edit/update pages.
    - As a shop owner, I can click the delete button, so that I can delete products, orders, and users.
    - As a shop owner, I can view all users, products, and orders, so that I can get all the information I need.

- **The Edit Pages**
    - As a shop owner, I can change attributes of products, so that visitors see other prices, images, etc.
    - As a shop owner, I can create products, so that users can buy them.
    - As a shop owner, I can edit users, so that they have admin status (if they are employees) or different email addresses.
    - As a shop owner, I can view orders, so that I can navigate to the status information.
    - As a shop owner, I can change the order status, so that the order shows up as delivered.

- **The User Pages**
    - As a logged-in user, I can view my user information, so that I can change them.
    - As a logged-in user, I can view my orders, so that I can get status information.






## Features 

- __Header__

    - The header contains the ProClimbers name which is a link to the home webpage. The search bar and the link to the Cart page are also included here.
    - The dropdown menus for the user, which contain the logout button and the link to the profile page, and the Admin dropdown menu are located here.
      - The admin dropdown contains the links to all dashboard pages.
        - If the current user is not an admin, this dropdown menu is invisible.
    - The header has a fixed position and can be seen on all webpages at the top of the browser window.
    - On small screens, the header collapses to a dropdown burger button.
    - The header informs the user of the company name and clearly guides the user to all points of interest.
        
        - Header Images
              <img src="src/assets/screenshot-header.png" alt="Header">

      


### The Homepage

- The homepage is the starting page where you can see all products in three columns. You can scroll down here and click on individual products to get detailed information. Additionally, you can also view filtered search results here.
- On smaller screens, you will see only one column instead of three.

    - Landing Page
<img src="src/assets/screenshot-homepage.png" alt="Homepage">



### The Product Detail Page

- On the product detail page, you can access additional information about the product.
- If you are logged in, you can comment and rate a product here.
- You can also add the product to your shopping cart here.

   - Product page
   <img src="src/assets/screenshot-productdetail.png" alt="Property">
   <img src="src/assets/screenshot-productdetail-lowerpart.png" alt="Property">




### Profile Page

- This page shows all order the user has created and userinformation like email and password.
- The user informormations can be updated here.
- The user can also navigate to the order status here.

  - Profile page
  <img src="src/assets/screenshot-profilePage.png" alt="Profile">




### Create-Update-product Page

- If the User has admin status, she or he can create or upate, which is technically the same, a product here.
- All filds ore optional or have default values.
    - 404 page
    <img src="src/assets/screenshot-edit-product.png" alt="product update">

### Update User and Order Pages

- If the User has admin status, she or he can upate order and user here.
- If a user is an employee of Proclimbers the chef can make this user an admin.
- If a product is already paid, an admin can set the order status to delivered
    - Update user page
    <img src="src/assets/screenshot-edit-user.png" alt="user update">
    - Update Order page
    <img src="src/assets/screenshot-edit-order.png" alt="order update">


### order and pay process Pages

- This process contains severral pages
  - The user can change the amount of products her and gets an overview about all pices
  - The user can choose the paypal or credid card to pay (at the moment only paypal)
  - The user can pay the product
    - To test this a sandbox test paypal account is suggested.

    - Udate user page
    <img src="src/assets/screenshot-shoppingCart.png" alt="shopping Cart">
    - Udate Order page
    <img src="src/assets/screenshot-shippingAddress.png" alt="shipping Address">
    - Udate Order page
    <img src="src/assets/screenshot-placeOrder.png" alt="place Order">
    - Udate Order page
    <img src="src/assets/screenshot-orderSummary.png" alt="order Summary">




### 404 Page

- If the user clicks on a link that goes nowhere, they will be directed here.
     - 404 page
    <img src="src/assets/screenshot-404.png" alt="404">



## Login - Sign Up - Page

- These pages are customised, so that a user needs to login with email address
- If user is already logged in, she or he cannot login again
- If a user is logged in a loout button appears in the user dropdownmenu


  - Login
  <img src="src/assets/screenshot-signIn.png" alt="Log-In">
  - Sign Up
  <img src="src/assets/screenshot-signUp.png" alt="Sign Up">


## Features Left to Implement

  - Planned features: 
    - In the future, an admin will be able to add additional images to their products.
    - Users can add a profile image
    - The page gets a logo



## Testing 

- I have manually tested the program in the Code institute Heroku terminal and in my local terminal.by doing the following:
    - I have tested that the website works in different browsers (Chrome and Firefox).
    - I confirm that the website works and looks good on all standard screen sizes. This was tested with the devtools divice toolbar.
    - I confirm that the all forms are working.
    - I confirm that the the user can create, edit and delete products and orders.


    

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
<img src="src/assets/screenshot-html-validator.png" alt="HTML-Val">

- CSS Validation
<img src="scr/assets/screenshot-css-val.png" alt="CSS Validation">

- JSX Validation
    - with ES-Linter


- Lighthouse
<img src="scr/assets/screenshot-lighthouse.png" alt="Lighthouse">




### Unfixed Bugs

 - No Bugs are unfixed.

## Deployment

The project was deployed using Code institut's mock for Heroku

    Steps for deployment:
        This repository was cloned.
        A Herroku app was created.
        Added config vars for the secret key and for the posgresql database.
        The Heroku app was linked to the repository
        Deploy was clicked.

<!-- The live link can be found [here](https://---.herokuapp.com/) -->


## Credits 

### Content

- Instructions on how to structure full stack projects, how to work with databasis, how to use Django, and Postgresql  are from [Code Institute - Moments and drf](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/)
[and](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+DRF+2021_T1/courseware/f775d54df4da44d18309888b3fe884f7/bc5fbada70104d489aa0363a03d8bda8/)
- All icons were taken from [Font Awesome](https://fontawesome.com/)
- The code of the header dropdown menu is taken from Bootstrap. [Bootstrap](https://getbootstrap.com/docs/4.1/components/navbar/)
- Most styling components are from Bootstrap. [Bootstrap](https://react-bootstrap.netlify.app/docs/components/accordion)
- The basic style is from [Bootwatch](https://bootswatch.com/) -> Sandstone
- The all HTML structures are from Bootrap. [Bootstrap](https://getbootstrap.com/docs/4.1/layout/grid/)
- The Basic Project idea is from [Youtube](https://www.youtube.com/watch?v=_ELCMngbM0E&list=PL-51WBLyFTg0omnamUjL1TCVov7yDTRng)
- Instructions on how to upload Images in a form arefrom [stackoverflow](https://stackoverflow.com/questions/73269211/form-file-for-image-upload-not-working-in-react)

- Instructions on how to use redux for better understanding of what happens when, to see wich action is fired anf for bugfixig is taken from [Youtube](https://www.youtube.com/watch?v=u3KlatzB7GM&list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo)
- Instructions on how to use [JWT]https://jwt.io/ to check for token information is taken from CodeInsttute
- Instructions on how to use Postman to check the api calls with different authentification levels are taken from  [Youtube](https://www.youtube.com/watch?v=_ELCMngbM0E&list=PL-51WBLyFTg0omnamUjL1TCVov7yDTRng)
- Instruction on how to calculate the rating start count is taken from [npm](https://www.npmjs.com/package/react-rating-stars-component)




- Color-Scheme
  <img src="src/assets/color-scheme.png" alt="Color Scheme">

### Media

- The product images are from this open Source site [berg-freunde](https://www.berg-freunde.at/kletterschuhe/)
- The background image is from [PinnacleBarber](https://m.facebook.com/PinnacleBarber/)
- The logo is from [Vecteezy](https://de.vecteezy.com/vektorkunst/1968154-berg-logo-bilder)
    - I have no right to use these images commertially!


### Personal Advice

  - Thank You!
    -  Jubril Akolade
    - All people from my Slack Group!