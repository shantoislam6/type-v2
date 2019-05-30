/* 
 * TypeWrite contrustor all functionality go on here
*/ 
export default class TypeWriter{
    constructor(element, words= '[]', speed = 300, wait = 2000 ){
        this.element = element;
        this.words = words;
        this.text  = '';
        this.wordIndex = 0;
        this.wait  = parseInt(wait, 10);
        this.speed = parseInt(speed, 10);
        this.isDeleting = false;
        this.type();
    }
    type(){
        console.log(this.words);
    }

}