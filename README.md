
## Week 1 Assignment: Flixster

Submitted by: **Isa Escobar**

Estimated time spent: **12** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://ileanaescobar.github.io/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video
<a href="https://www.loom.com/share/ca614a1f94d14e0ea1d599e04f255b3f">
    <p>Flixster - 17 June 2022 - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/ca614a1f94d14e0ea1d599e04f255b3f-with-play.gif">
  </a>
  
`TODO://` Add the embedded URL code to your animated app walkthrough below, `<iframe 
src="https://www.loom.com/embed/ca614a1f94d14e0ea1d599e04f255b3f" frameborder="0" 
webkitallowfullscreen mozallowfullscreen allowfullscreen 
style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I thiink that the labs did help me prepeare to complete the assignment given that I had never worked with or learned any javascript,http,or css before. The first lab was the first time I ever used http or css and it taught me how to properly add the elements I wanted and try styling them in the correct way. Specifially I was introduced to using display: flex; which I ended up using in this project. The second lab was extremely useful since it taught me how to use javascript and be able to modify html code. I ended up directly using some of the same techniques, like using innerHTML to update the movie grid. The thid lab was useful because although I habe experience working with API's, I had no idea how to call them with javascript so that formatting I learned entirely from lab 3.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I think I would implement more feature like a search by genre, or a drop down with options to search by, like language, geographic origin, etc. I would also want to add a way for users to give reviews of the movies with comments and post them underneath the movie description.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here

### Shout out

I would like to give a shout out to my instructor Phineas who helped me figure out how to use the inspect selector to debug my code and also to my fellow intern Kareem Dacost who was having the same issues I was embeding the videos in the popup and helped me work through it together.
