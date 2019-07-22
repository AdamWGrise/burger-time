# Burger Time!
What veggie burgers have you eaten? Which ones are on your wish list? Keep track of them here!

## What is this app?
This app is a glorified task list - it can be themed to work with just about anything you want to keep track of as a set of items, separated out by whether or not they've been addressed or completed. This particular theme keeps track of varieties of veggie burgers, and whether or not you've eaten them.

There are a couple methods of interaction with the app:
1. There are two lists - one list of burgers that you still need to try, and one showing ones you've eaten.
2. Finally, more burgers can be added through the "Add a burger" section.

## How does it work?
On the front end, there's nothing super fancy needed! Just a little splash of Bootstrap and jQuery for a nice layout. Handlebars is the technology used to control the views, so there's ultimately only one main page with some templated components.

Node.js and the Express framework are used to run the application on the back end, along with MySQL to supply and store the data.

The application itself is available for usage online, at Heroku.

## Alright, so how is it used?
The interface is fairly intuitive. On the two lists of burgers, you can use the buttons on each listed burger to direct it where to go or what to do - you can shift them back and forth between whether or not you've tried them, or you can delete them from the app entirely. You can add additional burgers to the "Burgers to eat" list using the "Add a burger" section - just supply a name and click "Add burger," and it'll appear in the list for you!

## You mentioned Heroku - can I try the app there or something?

Yep! [Click here to try it out.](https://adams-veggie-burger-tracker.herokuapp.com/ "Adam G Friend Finder App on Heroku")
