import TypeWriter from './core/core';
/*
 * Bootstrap Function
 * @ return intit method
*/
export function type(){
    return {
        textElements: document.querySelectorAll('.text-type'),
        init(){
            Array.from(this.textElements).forEach(element => {
                const speed = element.getAttribute('data-type-speed');
                const wait  = element.getAttribute('data-type-wait');
                const words = JSON.parse(element.getAttribute('data-type-words'));
                new TypeWriter(element, words, speed, wait);
            });
        }
    }
}

