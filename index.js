/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)*/

function newImage(filePath, position, left, bottom) {
    let image = document.createElement('img')
    image.src = filePath
    image.style.position = position
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

//green character
newImage('assets/green-character.gif', 'fixed', '100px', '100px')

//pine tree
newImage("assets/pine-tree.png", "fixed", "450px", "200px");

//tree
newImage("assets/tree.png", "fixed", "200px", "300px");

//pillar
newImage("assets/pillar.png", "fixed", "350px", "100px")
//crate
newImage("assets/crate.png", "fixed", "150px", "200px");

//well
newImage("assets/well.png", "fixed", "500px", "425px");

/* 
    let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

*/

function newItem(filePath, position, left, bottom) {
    let item = document.createElement('img')
    item.src = filePath
    item.style.position = position
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}
//sword
newItem('assets/sword.png', 'fixed', '500px', '405px');

//sheild
newItem("assets/sheild.png", "fixed", "165x", "185px");

//staff
newItem("assets/staff.png", "fixed", "600px", "100px");