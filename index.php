<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="This website is created by Dat Nguyen, a web designer residing in Portand, Oregon.">
  <meta name="keywords" content="web design, web designer, HTML, CSS">
  <meta name="author" content="Dat Nguyen">
  <meta name="copyright" content="Dat Nguyen">
  <title>Dat Nguyen | The home of everything</title>
  <link rel="icon" type="image/png" href="images/my-favicon.png" sizes="32x32" />
  <link href="https://fonts.googleapis.com/css?family=Copse|Nothing+You+Could+Do|Tajawal" rel="stylesheet">  
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <script src="script/prefixfree.min.js"></script>
  <script src="script/jquery-3.3.1.min.js"></script>  
  <link rel="stylesheet" href="style/reset.css">
  <link rel="stylesheet" href="style/generic.css">
  <link rel="stylesheet" href="style/main.css">
</head>

<body id="top">
  <section id="loading">
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </section> 
 
  <?php include 'header.php';?> 
  <main>
    <section id="about">
      <h2>A Few Words</h1>
      <section>
        <figure>
          <img src="images/dat-nguyen-portrait.png" alt="A drawing of Dat Nguyen, the owner of this website.">

        </figure>
        <div>
          <p>Dat Nguyen is currently a second-year student at Portland Community College and majors in Web Development &amp; Design. His knowledge of web development, however, is very limited. Instead, he's usually seen learning and making designs. Certainly, web designing is his strongest skill. For now, he's looking for a chance to do real projects with professional web developers and web designers.</p>
          <p>In his free time, he may learn Japanese, learn to draw, learn music, or read various types of books. He's a keen believer that designing is not an easy job, and that the better one knows, the more his designing skill is refined.</p>
        </div>
      </section>
    </section>
    
    <section id="projects">
      <h2>Highlight Projects</h2>
      <article>        
        <section class="pro-heading">
          <h3>Winter 2018 <br>College Project</h3>
          <p>CAS 222 - Integrated Web Design</p>
        </section>      
        <figure>
          <img src="images/cas222.jpg" alt="An image of people preparing for a marathon.">
        </figure>   
        <section class="pro-content">
          <p>This was one of the most challenging web-related courses at Portland Community College. In this one, I had to build a website based on some given content. I had to make back and forth discussions with the customer (not real, but is a hard-to-please one). I had to learn mostly everything new on my own. Additionally, I had to use PHP to send data from the registration form back to the server and a personal email. The validation for the form had to be written out using JavaScript/jQuery. There were all kinds of things to take care of.</p>       
          <p>The course was harsh, but in the end, I made it out alive.</p>
          <p><a target="_blank" href="http://datwebdesign.com/projects/cas222/">See Now</a></p>   
        </section>       
      </article>
      
      <article>        
        <section class="pro-heading">
          <h3>Summer 2017<br>Personal Work</h3>
          <p>Hana Flowershop</p>
        </section>      
        <figure>
          <img src="images/hana-shop.jpg" alt="An image of alstroemeria flowers.">
        </figure>   
        <section class="pro-content">
          <p>This is one of the three personal projects I made in summer 2017. The purposes were to learn how to use Photoshop in creating web mockups and to learn new CSS styling properties, such as flex box and grid.</p>
          <p>This is the website of an imaginary flowershop. Unlike other ones, I wrote the whole content on my own. I used CSS Flexbox and Grid, so please use latest web browers to view it.</p>
          <p><a target="_blank" href="http://datwebdesign.com/projects/hana-flowershop/">See Now</a></p>   
        </section>       
      </article>
      
      <article>        
        <section class="pro-heading">
          <h3>Spring 2017 <br>College Project</h3>
          <p>CAS 211W - WordPress Customization/Themes</p>
        </section>      
        <figure>
          <img src="images/cas211w.jpg" alt="A black and white image of a photographer.">
        </figure>   
        <section class="pro-content">
          <p>In this project, my job is to create a WordPress theme for a certain type of users. I make this for photographers, but it's likely to work for many other type of users as well.</p>
          <p>For this one, I created the whole thing from Boostrap template. It was a long and painful journey, but I somehow did it pretty well. It had some minor styling problems when I changed its folder location on the server. But still, the theme looks modern and cheerful.</p>
          <p><a target="_blank" href="http://datwebdesign.com/projects/cas211w/project/">See Now</a></p>   
        </section>       
      </article>
      
          
      
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
      <p>To get in touch, fill in the form and click Submit. Let's talk!</p>
      <section>
        <form method="post" id="registration-form" name="registrationform" action="contact-form-to-email.php">
          <div>
           <label for="name">Your name</label>
            <input type="text" name="name" id="name">
            <p class="error">
              <span>Your name must contain 5 to 30 characters.</span>
            </p>
          </div>
          
          <div>
            <label for="email">Your email</label>
            <input type="text" name="email" id="email">
            <p class="error">
              <span>Please type in a correct email.</span>
            </p>
          </div>
          
          <div>
            <label for="message">Your message</label>
            <textarea rows="6" name="message" id="message"></textarea>        
            <p class="error">
              <span>Your message must contain 10 to 100 words.</span>
            </p>
          </div>
          <button id="submit-button" type="submit">Submit</button>
        </form>
      </section>
    </section>
  </main>
  
  <?php include 'footer.php';?>
  
  <script src="script/custom.js"></script>
</body>
