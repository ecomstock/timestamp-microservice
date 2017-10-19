const express = require('express')
const http = require('http')

const app = express()
//app.set('view engine', 'pug')

const port = process.env.PORT || 3000
const host = 'localhost'

app.listen(port, host, () => {
	console.log(`Server listening at port ${port}.`)
})

// GET request for URL parameter. Declare timestamp variable and
// set equal to the timestamp parameter. 
app.get('/:timestamp', (req, res) => {
  let timestamp = req.params.timestamp;
  res.json(getJSON(timestamp));
});

function getJSON(timestamp) {
	let date
	// Declare result variable and set to object with keys for
	// unix and natural.
	let result = {
		unix: null,
		natural: null
	}

	// If timestamp is a number, convert it to a date.
	// Else attempt to make a new date out of other possible formats.
	if (!isNaN(parseInt(timestamp))) {
		date = new Date(parseInt(timestamp))
	} else {
		date = new Date(timestamp)
	}

	// Convert date back to unix time and store in result.unix.
	// Run the date object through a function that makes it natural and 
	// store it in result.natural.
	if (!isNaN(date.getTime())) {
		result.unix = date.getTime()
		result.natural = getNaturalDate(date)
	}

	return result;
}

function getNaturalDate(date) {
	var months = [
	'January', 
	'February', 
	'March', 
	'April', 
	'May', 
	'June', 
	'July', 
	'August', 
	'September', 
	'Obtober', 
	'November', 
	'December'
	];
 
	return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}
