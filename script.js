'use strict'

console.log("I am here");


//TODO: I want to create a template - constructor function for an animal
// Is that four different constructors?
// Create a single constructor - template
// the constructor takes as parameters - animalName
// property called - animalName
// method to render itself on the screen - render()
function animal(animalname){
    this.animalname = animalname;
}
animal.prototype.render = function(){
    //do the render thing ... put yourself on the html file
    console.log('render thing')
}
// when the user clicks on the cat button a cat will appear below the button