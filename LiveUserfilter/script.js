const result = document.getElementById('result')
const filter = document.getElementById('filter')

getData()

//Initialize a list item, where we gonna put the date when we fetch
const listItem = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')//response

    const { results } = await res.json()

    //Clear results
    results.innerHTML = ''

    
}


