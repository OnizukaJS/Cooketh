# Cooketh

<br>



## Description

Lazy to cook? Got a last-minute dinner at home and you are out of ideas? This website gathers a community of nearby cooks to cook for you anyday, anytime, any cooking style.

Find a recipe you like, select your zone, a day, and hour, number of guests to please and send a request to the cook.
Once accepted, just wait for the day, relax and let the cook do the work.

Or sign-up as a cook and offer your awesome skills to the rest of the world: upload your specialties, take some neat pictures of your dishes (and you), fill up your profile and get ready to make some coins and friends.

Everybody wins.

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and look for recipes, also to have a navbar with a home button, sign up, log in and a FAQ page.
  Once logged in, I want to see my profile, my bookings and log out in the nabber.
- **sign up** - As a user I want to sign up on the web page so I can look for recipes, see the chefs, make bookings, edit them and save recipes for future occasions.
  -As a cook I want to sign up on the web page so I can add my recipes, upload pictures and accept requests.
- **login** - As a user and a chef I want to be able to log in on the web page so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.
- **recipes list** - As a user I want to see the list of recipes and filter them by style of cooking, type of cooking (vegan, vegetarian, all), allergies and price.
- **specific recipe** - As a user I want to see a more detailed view of the recipe with more pictures, description, ingredients, a form request to the chef and details of the chef.
- **my (user) profile** - As a user I want to be able to edit my profile.
- **my (chef) profile** - As a chef I want to be able to edit my profile and my recipes
- **my bookings** - As a user I want to see accepted bookings and be able to delete my pending requests. 
  -As a chef I wan to see my accepted bookings or delete my pending requests.
- **FAQ** - As a user and as a chef I want to see the most frequented asked questions about this website.



## Backlog

List of other features outside of the MVPs scope

- Home: recipes inspirations (reusar del listado de recetas)
- Video background on home
- Register validation
- Extender a más zonas
- Notificación request declined al user
- Editar bookings

- Image carousel on list of recipes preview
- Comments when submitting a request to the chef.
- Feedbacks
  - Score in feedback to the chef (when booking is over) 
  - Score in feedback to the recipe (when booking is over) 
  - Feedback from chef to user
- Save recipes in favourites
- Upon request, show to chef if user has any allergies or if it's vegan/vegeterian as extra info in the preview
- Number of bookings shown in profile (user and chef).



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                              |                                                          |
| `GET`      | `/restaurants/details/:id`         | Render `restaurant-details` view for the particular restaurant. |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}

```



Favorites model

```javascript
{
  placeId: String,
}

```



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



****

<br>

### Userflow

Miro: https://miro.com/app/board/o9J_koKWL38=/

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)