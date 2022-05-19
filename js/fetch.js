const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '0178a7978fmsh70c63ddf471596ep171349jsnb138a7b090d6'
    }
};

fetch('https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));