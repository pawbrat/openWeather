# weatherapp

hosted temporary [here](http://weatherapp.cba.pl/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests (not yet there, though averages and data processing could use some...)
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

# openWeather


## goal
  Make a nice looking 5-day weather forecast page using [OpenWeatherMap forecast API](https://openweathermap.org/forecast5) and Vue. With tests. Hosted somewhere (probably github pages). 

## MVP plan
  - ~~make repo~~
  - ~~make basic vue app (UI placeholders and API method mocks)~~
  - ~~talk to openWeatherMap (pass city name?)~~
  - ~~consume API response (interpret and display weather forecast)~~
  - build/run/test instructions
  - ~~hosting~~
## optional features
  - decent UI
  - get weather forecast for user location
  - get weather forecast by coordinates
  - make use of local storage/cookies (history, favourites etc)
  - optimize bundle
  - add charts (temperature, rain etc)
  
## devblog

###5
managing tests in vue turned out to be not-as-easy as other topics...
took me a while to run tests against *.vue files - added mocha+chai+webpack.
still need to work on testing regular *js files thugh

###4
nope, githubpages is not the hosting i was looking for. used CBA for now. sorry.

###3
connected to openweather, added some basic data transformations and grouping; moved logic/utility files to core folder as they're obviously not components; weather forecast is now displayed (just temperatures and basic description for now); cleaned up a bit (bye helloworld)

###2
created basic vue app with basic component structure 

###1
created new git repo. had to update local git - was so old it couldnt clone repo ('alert protocol version' error).
had some thought on how to approach the task, the result you can find above in MVP and features description.
This task seems to be perfect opportunity to try something new.
Angular seems much like an overkill for the task given. Vue was on my radar for some time, promising quickstart and flat learning curve. Seems more streamlined that React. 
Decided to go with Vue. 
Size of this project allows to swith to vanilla any time if things go wrong :)