
//simple API call to fetch data using async function in ES8 javaScript
async function fetchUsers() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data);
}

//using async function to get all the data 

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
	//in javascript try and catch function use to catch the error if found
	try {
		const [users, posts , albums ] = await Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
	}))

	console.log('users', users);
	console.log('posts', posts);
	console.log('albums', albums);

	}
	catch(err) {
		console.log('Ooooooops !', err);
	}

}

// using (for await of loop) to get Data for DRY (Donot Repeat Yourself) 
// (for await of) is the ES9 feature loop 


const getData2 = async function() {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data);
	} 
}