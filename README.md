# Milestone Project Two | Music quiz game

[View the live project here](https://ashb87.github.io/Quiz-Ms-Project-Two/) <br>

## About

This website has been created for my Milestone 2 Interactive Frontend Development project. 
I want to create a music quiz game with a varied choice of questions based on all types of music to test the users knowledge. The user will be given a random 10 questions, worth 10 points a quesiton, with 30 seconds to answer each.
With a maximum of 100 points availible, the user will then be able to save their high score and try to get on the top 5 leaderboard.

## User Experience-(UX)

### Site Goals

  1. I want the site to be attractive, responsive and easy to use for the user.
  2. I want the site to work as intended incrementing the quesitons and score as the user progresses, with the timer going down for each question.
  3. I want the user to have a varied choice of questions.
  4. I want the user to be able to save their score.
  5. I want the user to be able to navigate easily through the different pages of the site.

### User Stories

  * #### First Time Visitor Goals
    1. I want the game to be attractive and and easy to read all text.
    2. I want the game to be responsive to whichever device I am playing it on.
    3. I want to be able to navigate around the different pages of the site.
    4. I want to be able to learn how the game works.
    5. I want to be given a choice of varied questions.

  * #### Returning/ Frequent Visitor Goals
    1. I want to be given varied questions each time I play.
    2. I want to be able to record my score and try to get on a leaderboard.
    3. I want to see other users previous scores so I can try to beat them.

### Design

Because of the topic of the quiz, I want the design of the website to have a music themed background. It needs to be pleasing for the user to look at with the game elements easily distinguishable from the background so that everything is clear and easy to use. To do this I will have a fairly dark background with brighter colours being used for the game so they will contrast nicely together.
I want to keep a consistent theme throughout the site by using the same colour combinations on each page. With the site being attractive for the user and easy to use I am hoping the user will want to keep returning to play the game.



  * #### Wireframes

  To make my wireframes I have used balsamiq. I have done one for each page and did a design for larger screens and smaller screens to show how the site will be responsive to screen size and change accordingly. The links to each one are below.<br> 
  **__For easier viewing I would recommend clicking the 
  dowload button above the wireframe image as they appear much larger when viewed directly through github__**
  * [Desktop display](https://github.com/Ashb87/Quiz-Ms-Project-Two/blob/master/Quiz-project-Ms2/Desktop-wireframe.png)
  * [Mobile and Tablet display](https://github.com/Ashb87/Quiz-Ms-Project-Two/blob/master/Quiz-project-Ms2/Mobile_Tablet%20wireframe.png)

The design of my project has been kept very similar to that of my wireframes. The main difference was on larger screens I had planned to have the answer boxes displayed with two side by side above another two side by side. I decided in the end to display all four answer boxes stacked on top of each other as I found the questions with longer answers were fitting better this way without having to adjust the font size. The text was then not looking too squashed inside its container. I kept the same display throughout all screen sizes adjusting any font sizes accordingly.  

  * #### Imagery

For this project I have used one image to be the main background across all the different pages of the site. It is a black and white patterend image with a music theme. I also placed a transparent overlay on top of the image to soften the brightness of it, and help enhance the interactive parts of the site for the user making it all stand out clearly and be visually appealing as well as usable and easy to see.

<img src="assets/images/bg-image.png" width="450" height="300">

  * #### Color Scheme

For this project I wanted the colours to be vibrant and really pop out against the darker background that I chose. My three main colours are a shade of **Pink,** **Yellow** and **Greeen** which are named **Hot Magenta,** **Sizzling Sunrise** and **Harlequin** respectively. I have used these colours throughout all the differnt elements of the game including text colour and text shadow, buttons, links and shadowing for all the clickable elements. I had a general idea of what colours I wanted to use and then used the google color picker to find the exact shades I wanted and that I feel have complimented each other really well. 

 <img src="assets/images/colors.png" width="450" height="300">   

  * #### Typography

The two fonts I have used in this project are **Yomogi** and **Orbitron** both imported from **Google fonts.** The **Orbitron** font has been used for my h1 headings and also the quesion counter and score counter on the game page. I have used **Yomogi** for everything else. I chose these because I wanted something bold and a bit different to stand out for the headings and found **Orbitron** fitted this really well and suited the style of design I was going for. For the rest of the text I wanted something that would be easy to read, compliment the orbitron font and also be a little different to standard fonts. When searching google fonts **Yomogi** was the one that stood out to me the most and I think looks great with the rest of the design. 
  
## Features

The design and layout of the game is responsvie to all different screen sizes and remains attractive and easy to use no matter what device it is being played on.

  * ### Home Page
    * Pop up modal when user clicks on the **rules** button that explains how the game works.
    * **High Scores** button that when clicked will link the user to the top 5 highscores. These scores are stored and pulled from local storage.
    * **Play** button that links the user to the main game page.
    * Social media links that I have used to help with the design of the page. These links will just take the user to the home page of the selected link.

  * ### Game Page
    * A question counter that shows the user which question number they are on out of 10.
    * A score counter that shows the user what they're current score is and that increments by 10 for every correct answer.
    * A question and 4 possible answers to choose from. The selected answer will turn red if it is wrong and green if it is correct.
    * A 30 second timer that counts down on screen and resets for each new question.
    * A home button that will take the user back to the main page.

  * ### End Page
    * A display of the users and score.
    * A message for the user that changes depending on the score achieved.
    * The optiion for the user to enter their name and save their score which will be added to the highscore page if the score is high enough.
    * A button to let the user play again.
    * A button to take the user back to the home page.

### fixed bugs 
  * json file giving &quot-- changed innerText to innerHTML