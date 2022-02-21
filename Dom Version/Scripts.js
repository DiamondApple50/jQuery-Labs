window.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button')
    let div = document.createElement('div')
    let text = document.createTextNode('Nice Message')
    let containerDiv = document.createElement('div')

    
    button.appendChild(text)
    div.appendChild(button)
    document.body.appendChild(div)
    containerDiv.className = 'Container'
    document.body.appendChild(containerDiv)
    button.addEventListener ("click", function () {

        alert('This is a nice message.')

    })


let newDiv = document.createElement('div')
newDiv.className = 'box'

containerDiv.appendChild(newDiv)



newDiv.addEventListener("mouseout", notHover)
newDiv.addEventListener("mouseover", setRandomColor)
function setRandomColor() {
        const randumNumm = Math.floor(Math.random() * CSS_COLOR_NAMES.length)
            event.target.style.backgroundColor = CSS_COLOR_NAMES[randumNumm]
        }
        function notHover() {
            event.target.backgroundColor = CSS_COLOR_NAMES[2]
        }



const CSS_COLOR_NAMES = [
    'brown',
    'red',
    'black',
    'orange',
    'blue',
    'purple',
    'pink',
    'lime'
]


let NewDiv = document.createElement('div')
let P = document.createElement('P')
text = document.createTextNode('Laboris dolore nisi sunt deserunt cillum deserunt velit.')
containerDiv.appendChild(NewDiv)
NewDiv.appendChild(P)
P.appendChild(text)


})
