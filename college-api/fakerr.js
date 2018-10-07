//to run this
//node fakerr 0

var faker = require('faker');
var fs = require('fs'); //internal

let majors = ["Applied Mathematics", "Computer Science", "Computer Engineering", "Electrical Engineering", "Mechanical Engineering", "Software Engineering", "Data Science", "Cybersecurity"];

//between 2.5 and 4
let randomGpa = () => (Math.random()*(3-2.9+1)+2.5).toFixed(2);

var randomTenDigitNum = () => {
  var num = "";
  for (var i=0; i<10; i++){
    num = num + Math.floor(Math.random()*10);
  }
  return num;
}

let studentId = () => (Math.floor(Math.random()*10000000));
var colleges = [
  {
    "college": "DigiPen Institute of Technology",
    "url": "https://www.digipen.edu/"
  },
  {
    "college": "Colorado State University",
    "url": "https://www.colostate.edu/"
  },
  {
    "college": "Brigham Young University",
    "url": "https://www.byu.edu/"
  },
  {
    "college": "University of Connecticut",
    "url": "https://www.uconn.edu/"
  },
  {
    "college": "University of Florida",
    "url": "https://www.ufl.edu/"
  },
  {
    "college": "Santa Clara University",
    "url": "https://www.scu.edu/"
  },
  {
    "college": "University of Colorado at Boulder",
    "url": "https://www.colorado.edu/"
  },
  {
    "college": "North Carolina State University",
    "url": "https://www.ncsu.edu/"
  },
  {
    "college": "Boston University",
    "url": "https://www.bu.edu/"
  },
  {
    "college": "University of Minnesota at Twin Cities",
    "url": "https://www.twin-cities.umn.edu/"
  },
  {
    "college": "University of California at Santa Barbara",
    "url": "https://www.ucsb.edu/"
  },
  {
    "college": "Ohio State University",
    "url": "https://www.osu.edu/"
  },
  {
    "college": "University of Washington",
    "url": "https://www.washington.edu/"
  },
  {
    "college": "University of California at Davis",
    "url": "https://www.ucdavis.edu/"
  },
  {
    "college": "Rochester Institute of Technology",
    "url": "https://www.rit.edu/"
  },
  {
    "college": "Worcester Polytechnic Institute",
    "url": "https://www.wpi.edu/"
  },
  {
    "college": "University of Maryland at College Park",
    "url": "https://www.umd.edu/"
  },
  {
    "college": "New York University",
    "url": "https://www.nyu.edu/"
  },
  {
    "college": "California Polytechnic State University",
    "url": "https://www.calpoly.edu/"
  },
  {
    "college": "Northeastern University",
    "url": "https://www.northeastern.edu/"
  },
  {
    "college": "University of Southern California",
    "url": "https://www.usc.edu/"
  },
  {
    "college": "University of Wisconsin at Madison",
    "url": "https://www.wisc.edu/"
  },
  {
    "college": "University of California at San Diego",
    "url": "https://www.ucsd.edu/"
  },
  {
    "college": "University of Texas at Austin",
    "url": "https://www.utexas.edu/"
  },
  {
    "college": "Virginia Tech",
    "url": "https://www.vt.edu/"
  },
  {
    "college": "University of California at Los Angeles",
    "url": "https://www.ucla.edu/"
  },
  {
    "college": "Vanderbilt University",
    "url": "https://www.vanderbilt.edu/"
  },
  {
    "college": "Purdue University",
    "url": "https://www.purdue.edu/"
  },
  {
    "college": "University of Illinois at Urbana-Champaign",
    "url": "https://www.illinois.edu/"
  },
  {
    "college": "Northwestern University",
    "url": "https://www.northwestern.edu/"
  },
  {
    "college": "Rice University",
    "url": "https://www.rice.edu/"
  },
  {
    "college": "Harvey Mudd College",
    "url": "https://www.hmc.edu/"
  },
  {
    "college": "University of Pennsylvania",
    "url": "https://www.upenn.edu/"
  },
  {
    "college": "Yale University",
    "url": "https://www.yale.edu/"
  },
  {
    "college": "Columbia University",
    "url": "https://www.columbia.edu/"
  },
  {
    "college": "Johns Hopkins University",
    "url": "https://www.jhu.edu/"
  },
  {
    "college": "Rensselaer Polytechnic Institute",
    "url": "https://www.rpi.edu/"
  },
  {
    "college": "University of Michigan at Ann Arbor",
    "url": "https://www.umich.edu/"
  },
  {
    "college": "Duke University",
    "url": "https://www.duke.edu/"
  },
  {
    "college": "Harvard University",
    "url": "https://www.harvard.edu/"
  },
  {
    "college": "Cornell University",
    "url": "https://www.cornell.edu/"
  },
  {
    "college": "Princeton University",
    "url": "https://www.princeton.edu/"
  },
  {
    "college": "University of California at Berkeley",
    "url": "https://www.berkeley.edu/"
  },
  {
    "college": "Carnegie Mellon University",
    "url": "https://www.cmu.edu/"
  },
  {
    "college": "Stanford University",
    "url": "https://www.stanford.edu/"
  },
  {
    "college": "California Institute of Technology",
    "url": "https://www.caltech.edu/"
  },
  {
    "college": "Massachusetts Institute of Technology",
    "url": "https://www.mit.edu/"
  }
]

var i = process.argv[2];

console.log('i', i);

createRow();

function createRow(){
	var randomCard = faker.helpers.createCard();
	var name = randomCard.name;
  var randomGPA = randomGpa();
  var randomMajor = majors[Math.floor(Math.random()*majors.length)];

  var randomCollege = colleges[Math.floor(Math.random()*colleges.length)];

  var college = randomCollege.college;
  var emailDomain = randomCollege.url.split('https://www.')[1];
  var email = name.replace(/ /g, '-').toLowerCase() + '@' + emailDomain;

	var studentId = randomTenDigitNum();
  var gradDate = faker.date.future();

  var arr = [college, studentId, name, randomMajor, randomGPA, gradDate, email];

  fs.appendFile('master-students-college-grad-info.csv', arr.join(',') + "\n", 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('It\'s saved!');
      console.log(arr);
    }
  });
}

/*
college - done

student_id
	random
		number
		float

full name - done

major - done

GPA 3.00
	random
		number
		float

grad date
	date
		future

email - done

*/

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

/*
  this is what faker.helpers.createCard() looks like

	{ name: 'Dr. Glen Murazik',
	  username: 'Derrick_Trantow4',
	  email: 'Bettye16@yahoo.com',
	  address: 
	   { streetA: 'Hirthe Mill',
	     streetB: '608 Bogan Lock',
	     streetC: '10619 Lockman Path Apt. 727',
	     streetD: 'Suite 849',
	     city: 'Electabury',
	     state: 'Utah',
	     country: 'Niue',
	     zipcode: '22933-3751',
	     geo: { lat: '-30.9603', lng: '-84.4280' } },
	  phone: '(247) 904-0735',
	  website: 'eliza.net',
	  company: 
	   { name: 'O\'Reilly, Fadel and Veum',
	     catchPhrase: 'Inverse eco-centric circuit',
	     bs: 'value-added unleash networks' },
	  posts: 
	   [ { words: 'tenetur cum natus',
	       sentence: 'Quia perferendis eveniet.',
	       sentences: 'Maxime id facere dolor omnis est laboriosam. Quis tenetur quia facere provident aut et ut.',
	       paragraph: 'Doloribus reiciendis quisquam. Cumque qui sit dolores occaecati. Culpa eligendi occaecati velit molestiae aut et. Et consequatur eius quae doloribus non. Animi quisquam minima rerum dolores.' },
	     { words: 'quis magnam quasi',
	       sentence: 'Veritatis consectetur delectus recusandae minima.',
	       sentences: 'Temporibus modi odio. Voluptatem ducimus sequi. Aut sunt vitae. Adipisci id nihil.',
	       paragraph: 'Cum praesentium aut earum ea qui et consequatur est vel. Et libero est laboriosam ipsa occaecati voluptatem sapiente. Itaque quidem sapiente autem libero provident. Ad suscipit necessitatibus dignissimos possimus dolor voluptatem ut.' },
	     { words: 'sequi vero eos',
	       sentence: 'Culpa modi iste molestiae et.',
	       sentences: 'Ut consectetur nulla cupiditate. Ut nesciunt officiis laborum quia cum sit quo. Deserunt et fugit vero et ut ipsa.',
	       paragraph: 'Sint perspiciatis non. Modi error id dolorem illo tempore. Quia et praesentium. Provident ipsa ratione. Quia aut modi ut.' } ],
	  accountHistory: 
	   [ { amount: '621.80',
	       date: 2012-02-02T08:00:00.000Z,
	       business: 'Flatley - Johns',
	       name: 'Investment Account 7625',
	       type: 'deposit',
	       account: '00441321' },
	     { amount: '622.43',
	       date: 2012-02-02T08:00:00.000Z,
	       business: 'Cartwright and Sons',
	       name: 'Personal Loan Account 6167',
	       type: 'invoice',
	       account: '85197152' },
	     { amount: '888.73',
	       date: 2012-02-02T08:00:00.000Z,
	       business: 'Corwin - Bayer',
	       name: 'Home Loan Account 2372',
	       type: 'payment',
	       account: '66139689' } ] }

*/