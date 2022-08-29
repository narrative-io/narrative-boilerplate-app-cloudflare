import manifest from '../../manifest.json';
let baseUrl = null;

if(process.env.NODE_ENV === 'production') {
	baseUrl = manifest.baseUrls['production-api'];
} else {
	baseUrl = manifest.baseUrls['staging-api'];
}

let headers = null

function setHeaders(token) {
	headers = {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}
}

function getHeaders() {
	return headers
}

export {
	baseUrl,
	setHeaders,
	getHeaders
}