/* 
 * TypeWrite Class all where go on all functionality for auto typeing 
*/ 
export default class TypeWriter{

    constructor(
        element, 
        words = '[]',
        speed = 300,
        wait = 2000, 
        blinkSpeed = 500 , 
        blink = false,
        removeSpeed,
        colors,
        fontWeight = '',
        blinkText
        ){
        this.element = element;
        this.words = words;
        this.colors = colors;
        this.colorIndex = 0;
        this.text  = '';
        this.wordIndex = 0;
        this.targetDelete = '';
        this.wait  = parseInt(wait, 10);
        this.speed = parseInt(speed, 10);
        this.isDeleting = false;
        this.blinkSpeed = blinkSpeed;
        this.isBlinkAnimate = blink;
        this.removeSpeed = removeSpeed != undefined ? removeSpeed : this.speed / 2;
        this.letterIndex = 0;
        this.color = '';
        this.typeSpeed = this.speed;
        this.fontWeight = fontWeight;
        this.blinkText = blinkText;
        this.typeInit();
    }
    typeInit(){
        const styleText = `
        <style>
            .blink-animate{
                opacity: 1; 
            }
            @keyframes blink {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
            
                }
            }
        </style>`; 

        this.element.style.fontWeight = this.fontWeight;

        if(this.isBlinkAnimate){
            this.element.innerHTML += styleText;
        }

        // add text element
        this.element.innerHTML += `<span></span><span class="blink-animate">${this.blinkText != null ? this.blinkText : '|'}</span>`;

        // start type
        this.type();
    }
    // type method
    type(){
         
        // Set current word index 
         const currentW = this.wordIndex % this.words.length;


         if(Array.isArray(this.colors)){
             // Set current color index 
             const currentC = this.colorIndex % this.colors.length;
             // Get color
             this.color = this.colors[currentC];
         }


         // Get full text 
         const fullText = this.words[currentW];


         // check if deleting or adding 
        if( !this.isDeleting && this.letterIndex <= fullText.length){
            // add text
            this.text = fullText.substring(0, this.letterIndex);
            this.letterIndex++;

            // check if ready for remove text
            if(this.letterIndex > fullText.length - 1){
                this.typeSpeed = this.removeSpeed;

                // start blink animation
                if(this.isBlinkAnimate){
                    this.element.children[2].style.animation = `blink ${ this.blinkSpeed / 1000}s infinite`;
                }
                
                // wait for remove text
                setTimeout(()=>{

                    this.letterIndex = fullText.length;
                    this.isDeleting = true;

                    // remove blink animation
                    if(this.isBlinkAnimate){
                        this.element.children[2].style.animation = ``;
                    }

                },this.wait);
            }
            
        } else if ( this.isDeleting && this.letterIndex >= 0) {

            // remove text
            this.text = fullText.substring(0, this.letterIndex);
            this.letterIndex--;

             // check if ready for add next word text
            if(this.letterIndex == 1){
                this.letterIndex = 0;
                this.typeSpeed = this.speed;
                this.isDeleting = false;
                this.wordIndex++;
                this.colorIndex++;
            }
        }


        // add text to element
        this.element.children[1].innerHTML = this.text;
 
        // add color to element
        this.element.style.color = this.color;

        // Run type() method interval
        setTimeout(()=>this.type(), this.typeSpeed);
    }
}