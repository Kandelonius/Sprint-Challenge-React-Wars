# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

react tries to help build quicker more easily writable dynamic websites. It accomplishes this task by only updating the parts of the site that are changing instead of updating the entire page every time anything is changed.

1. Describe component state.

a state is something like the text of a component being red or the font size being 2rem and usually describes things that can be altered in some way creating a different state.


1. Describe props.

props are kind of like variables with key value pairs that can be taken in to alter state.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

side effects are asyncronous code. something like a call to a server or use of the timer in the window. we can sync effects with useEffect. 

{
    "people": "https://swapi.py4e.com/api/people/", 
    "planets": "https://swapi.py4e.com/api/planets/", 
    "films": "https://swapi.py4e.com/api/films/", 
    "species": "https://swapi.py4e.com/api/species/", 
    "vehicles": "https://swapi.py4e.com/api/vehicles/", 
    "starships": "https://swapi.py4e.com/api/starships/"
}
{
    "count":87,
    "next":"https://swapi.py4e.com/api/people/?page=2",
    "previous":null,
    "results":[
        {"name":"Luke Skywalker",
        "height":"172",
        "mass":"77",
        "hair_color":"blond",
        "skin_color":"fair",
        "eye_color":"blue",
        "birth_year":"19BBY",
        "gender":"male",
        "homeworld":"https://swapi.py4e.com/api/planets/1/",
        "films":[
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/6/",
            "https://swapi.py4e.com/api/films/7/"],
        "species":[
            "https://swapi.py4e.com/api/species/1/"],
        "vehicles":[
            "https://swapi.py4e.com/api/vehicles/14/",
            "https://swapi.py4e.com/api/vehicles/30/"],
        "starships":[
            "https://swapi.py4e.com/api/starships/12/",
            "https://swapi.py4e.com/api/starships/22/"],
        "created":"2014-12-09T13:50:51.644000Z",
        "edited":"2014-12-20T21:17:56.891000Z",
        "url":"https://swapi.py4e.com/api/people/1/"}