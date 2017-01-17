# Timestamp API

This api was created for the FreeCodeCamp exercice "Timestamp Microservice"

* [FreeCodeCamp] - Link to the exercice
* [Heroku] - Online deployed version

### API description

The Timestamp API must return the unix value date as well as the natural date of an argument passed in the URL while implementing the use-cases below.

  - **Use-case 1:** User can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date *(**example**: January 1, 2016)*
  - **Use-case 2:**  If it does, it returns both the Unix timestamp and the natural language form of that date
  - **Use-case 3:**  If it does not contain a date or Unix timestamp, it returns **null** for those properties

## Example (usage)
Use the URL below to get the date in the desired format
```sh
https://smg-timestamp.herokuapp.com/August%2028,%201981
https://smg-timestamp.herokuapp.com/367857601
```
## Example (result)
Below is shown the result returned from the URL above.
```sh
{ "unix": 367857601, "natural": "August 28, 1981" }
```
## Technologies used
This is a very small example of an API created in NodeJS using the Express Framework.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.
