//usage:
//node college-url-scraper.js 0

var Nightmare = require('nightmare');
var cheerio = require('cheerio');
var fs = require('fs'); //internal

var indexCollegeToScrape = process.argv[2];

var colleges = ["DigiPen Institute of Technology", "Colorado State University", "Brigham Young University", "University of Connecticut", "University of Florida", "Santa Clara University", "University of Colorado at Boulder", "North Carolina State University", "Boston University", "University of Minnesota at Twin Cities", "University of California at Santa Barbara", "Ohio State University", "University of Washington", "University of California at Davis", "Rochester Institute of Technology", "Worcester Polytechnic Institute", "Penn State", "University of Maryland at College Park", "New York University", "California Polytechnic State University", "Texas A&M University", "Northeastern University", "University of Southern California", "University of Wisconsin at Madison", "University of California at San Diego", "University of Texas at Austin", "Virginia Tech", "University of California at Los Angeles", "Vanderbilt University", "Purdue University", "University of Illinois at Urbana-Champaign", "Northwestern University", "Rice University", "Harvey Mudd College", "University of Pennsylvania", "Yale University", "Columbia University", "Johns Hopkins University", "Rensselaer Polytechnic Institute", "University of Michigan at Ann Arbor", "Duke University", "Harvard University", "Cornell University", "Princeton University", "University of California at Berkeley", "Georgia Tech", "Carnegie Mellon University", "Stanford University", "California Institute of Technology", "Massachusetts Institute of Technology"];

var college = colleges[indexCollegeToScrape]
var collegePlused = college.replace(' ', '+');

var url = `https://www.google.com/search?q=${collegePlused}`;

scrape(url);

//https://www.google.com/search?q=DigiPen+Institute+of+Technology

//on the google page
//document.querySelector('#search link').getAttribute('href')

function scrape(url){
  console.log(url);
  var scrape = new Nightmare({
          show: true
      })
      .goto(url)
      .evaluate(function() {
          return document.body.innerHTML;
      }).end().then(function(html) {
        if (html == undefined) {
          console.log('========================');
          console.log('html not there!');
          console.log(arg);
          console.log('========================');
          return;
        }

        var $ = cheerio.load(html);

        //has all the games
        var linkToCollege = $('#search link').attr('href').trim();

        
          fs.appendFile('college-info.csv', [college, linkToCollege].join(',') + "\n", 'utf8', function (err) {
            if (err) {
              console.log('Some error occured - file either not saved or corrupted file saved.');
            } else{
              console.log('It\'s saved!');
            }
          });
        
      });
}