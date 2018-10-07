if you run into bugs
	
	truffle migrate --reset

	or create a new meta mask account and use that

	or restart ganache

ran this

npm install -E openzeppelin-solidity

start JSON API server - emulating information coming from the college

	it uses db.json

	Start JSON Server

		cd college-api
		json-server --watch db.json

	Now if you go to the following url

		http://localhost:3000/students/1

			you'll get

			{
				id: 1,
				college: "Princeton University",
				student_id: 7352055446,
				name: "Gaston Willms DVM",
				masters_focus: "Computer Science",
				gpa: 3.34,
				grad_date: "Sun Dec 09 2018 04:38:50 GMT-0800 (PST)",
				email: "gaston-willms-dvm@princeton.edu/"
			}


	Also when doing requests, it's good to know that:

		If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to db.json using lowdb.

		Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
		Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.

		A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.