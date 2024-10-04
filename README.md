# Instructions

## Problem Brief

Dear Candidate,

Thank you for applying to the world-famous Sam's Bar. As you are no doubt aware, we are one of the finest speakeasy
cocktail bars in the country and are looking to modernise our technology. We are particularly interested in React, and
want you to show off your skills!

Recently, we've recruited some new bartenders. While they are very keen to learn, they are forgetful - often forgetting
the key ingredients. As a result, we think a search page for the different drinks we sell would help the bartenders learn
and remember all the different cocktails and their ingredients.

Conveniently, we already have a back-end search API, but unfortunately we have no-one to implement a front-end! Therefore,
the code you write will be almost exclusively front-end.

The search endpoint available for you to use is:
`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<SEARCH_TERM>`
where `<SEARCH_TERM>` is the name of a drink a bartender might enter (You will not need an API key for this - our endpoint
is open and publicly available).

A vague written document for other endpoint functionality exists [here](https://www.thecocktaildb.com/api.php).

## Expected Behaviour

Your search page should return results if a bartender enters 'Margarita', 'Old fashioned', or 'Negroni'.
This is a fully working API, with a comprehensive database, so feel free to explore other search terms too.

Further:
* The search page should render an image of each result, along with the name of the cocktail, and at least two of its
key ingredients.
* It should be responsive - the application could be used on the bar's full-sized desktop computer, or on our bartenders'
mobile phones or iPads.
* It should be visually appealing. Sam's Bar has a good reputation as a trendy place, and our apps should be the same.
  * Our colour palette can be found [here](https://coolors.co/faf8d4-ebdccb-c3baaa-91818a-b2a3b5).
* It should be easy to use and intuitively laid out.

Extension tasks:
* Allow the bartender to filter by 'Alcoholic' vs 'Non-alcoholic', for our tee-total patrons.
* Make use of the additional data returned in search results. What can you add to the UI to make our bartender's lives
easier?
* Add some automated testing, to ensure features do not break as we add more functionality in the future.

## Write-up

In your README, please answer the following questions in full. We'll talk about them in the meeting directly after.

* What more would you do if you spent more time on it? (this is an opportunity to explain your thinking and approach further)
* Explain why you took the approach that you did? e.g. why did you pick a particular library (or none at all)?
* Are there any known issues you'd like to flag?
* How would you improve the API that you used?
* If you were building a production API from scratch, what are some considerations you'd need to factor in?

## Submission

Your code, along with written answers to the questions under `Write-up` should be committed to the specified repository
no later than 1hr 30 after receipt of this problem brief.
