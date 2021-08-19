const result = document.getElementById('result')
const filter = document.getElementById('filter')

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

//Initialize a list item, where we gonna put the date when we fetch
const listItems = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')//response

    const { results } = await res.json()

    //Clear results
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}


