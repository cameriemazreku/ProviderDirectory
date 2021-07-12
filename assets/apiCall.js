const api_url = 'https://vc202011.aidbox.app'
//const api_url='http://vcawswebdev:9092'



function apiCall(endpoint, method='get', data=null) {
const url = api_url + endpoint
console.log(url)
if (method === 'get') {
return fetch(url, {
method: 'get',
mode: 'cors'
})
}
else {
return fetch(url, {
method: method,
mode: "cors",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(data)
})
}
}



export default apiCall