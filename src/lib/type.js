import TypeWriter from './core/core';
/**
 * 
 * @return intit method
*/
export function type(){
    return {
        textElements: document.querySelectorAll('.text-type'),
        init(){
            Array.from(this.textElements).forEach(element => {
                const speed = element.getAttribute('data-type-speed');
                const wait  = element.getAttribute('data-type-wait');
                const words = JSON.parse(element.getAttribute('data-type-words'));
                const blink = eval(element.getAttribute('data-type-blink'));
                const blinkSpeed = element.getAttribute('data-type-blink-speed');
                const removeSpeed = element.getAttribute('data-remove-Speed');
                const colors  = JSON.parse(element.getAttribute('data-type-colors'));
                const fontWeight = element.getAttribute('data-type-font-weight');
                const blinkText = element.getAttribute('data-blink-text');
                new TypeWriter(
                    element,
                     words, 
                     speed, 
                     wait,
                     blinkSpeed,
                     blink,
                    removeSpeed,
                    colors,
                    fontWeight,
                    blinkText
                );
            });
        }
    }
}

