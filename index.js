document.getElementById('generate-btn').addEventListener('click', function(e){
        e.preventDefault()
        const color =document.getElementById('color-input').value
        const scheme= document.getElementById('color-scheme').value 

    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${scheme}&count=5`)
    .then(res => res.json())
    .then(data => {
         let colors = data.colors.map(color=>{
        return `<div class="color-container" >
        <img src="${color.image.bare}">
        <p>${color.hex.value}</p>
        </div>`
        })
     document.getElementById('colorImage').innerHTML = colors.join('')
    })
})