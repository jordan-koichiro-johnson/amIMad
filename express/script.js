
const responseElement = document.getElementById('response')
const messageInput = document.getElementById('message')
const submitButton = document.getElementById('submit')
const madDoc = document.getElementById('madLink')
const notMadRes = document.getElementById('notMadResponse')
const madRes = document.getElementById('madResponse')

const message = document.getElementById('preMessage')

submitButton.addEventListener('click', runNatural)

function runNatural(e) {
    e.preventDefault()
    const str = messageInput.value
    const stringArray = str.split(' ');
    messageInput.value = ''
    const myInit = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(stringArray),

    };
    fetch('http://localhost:3009/natural', myInit)
        .then(res => res.json())
        .then(function (res) {
            madDoc.classList.add('hidden')
            madRes.classList.add('hidden')
            notMadRes.classList.add('hidden')
            message.classList.add('hidden')
            if (res < 0) {

                madDoc.classList.remove('hidden')
                madRes.classList.remove('hidden')
            } else {
                notMadRes.classList.remove('hidden')
            }
        })
        .catch(err => console.log(err))
}

