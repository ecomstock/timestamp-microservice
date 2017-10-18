const express = require('express')
const http = require('http')

const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index')
})

// GET request for URL parameter. Declare timestamp variable and
// set equal to the timestamp parameter. 
app.get('/:timestamp', function(req, res) {
  let timestamp = req.params.timestamp;
  res.send(`Timestamp: ${timestamp}`);
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
	if (!isNan(parseInt(timestamp))) {
		date = new Date(parseInt(timestamp))
	} else {
		date = new Date(timestamp)
	}

	// Convert date back to unix time and store in result.unix
	if (!isNan(date.getTime())) {
		result.unix = date.getTime()
		result.natural =
	}

	return result;
}

const port = process.env.PORT || 3000
const host = 'localhost'

app.listen(port, host, () => {
	console.log(`Server listening at port ${port}.`)
})
