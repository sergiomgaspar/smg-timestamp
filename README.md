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

## Local Installation

You'll need to have the latest verison of node.js installed. Either use your OS's package manager or follow the installation instructions on the [official website](http://nodejs.org).

Next, [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if it is not already installed. To clone this repository to your local machine, open a command line interface and navigate to your projects directory. Then type

`$ git clone https://github.com/sergiomgaspar/smg-timestamp.git`

Move to the `smg-timestamp` subdirectory and type `npm install`. This installs all of the API dependencies.

Finally, type `node smg-timestamp` to start the application. If all goes well, it will be available at `http://localhost:3000`.


## Technologies used
This is a very small example of an API created in NodeJS using the Express Framework.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

[FreeCodeCamp]: <https://www.freecodecamp.com/challenges/timestamp-microservice>
[Heroku]: <https://smg-timestamp.herokuapp.com/>

