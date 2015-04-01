## Installation

1. install npm (Windows users can download from http://nodejs.org/download/)
2. install grunt (Windows users can download from http://gruntjs.com/getting-started)
3. run "Node.js command prompt" (mainly for Windows users, unix users should have npm on path)
4. go to project directory (`cd ~/unipa-migration`)
5. type `npm install`

## Usage

1. run "Node.js command prompt" (mainly for Windows users, unix users should have npm on path)
2. go to project directory (`cd ~/unipa-migration`)
3. type `grunt` to compile the data
4. type `npm start` to run the web server
5. start a browser and go to http://localhost:8080

## Using your own data files

By default grunt compiles using the files present in the distribution `data/countries Version2.csv` and `data/Flow Data for Online Viz Version2.csv`, instead of overwriting these files you can specify different sets from command line

```javascript
grunt --countries=../europe/north.csv --data=../mydata/north-europe-data.csv
```

## More info
Other details can be found at [[FAQ|faq]] page

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Lint your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 null2 GmbH Berlin  
This work is licensed under a [Creative Commons Attribution-NonCommercial 3.0 Unported License](http://creativecommons.org/licenses/by-nc/3.0/).
