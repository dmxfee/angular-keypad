import backspaceTemplate from './backspace.svg';
import submitTemplate from './submit.svg';

export class KeypadConfig {

    // Define defaults
    constructor() {

        this.keypadDefaults = {

            // The array of numbers that makes up the keypad
            numbers: [
                { number: 1, superscript: '' },
                { number: 2, superscript: 'ABC' },
                { number: 3, superscript: 'DEF' },
                { number: 4, superscript: 'GHI' },
                { number: 5, superscript: 'JKL' },
                { number: 6, superscript: 'MNO' },
                { number: 7, superscript: 'PQRS' },
                { number: 8, superscript: 'TUV' },
                { number: 9, superscript: 'WXYZ' },
                { number: '*', superscript: '' },
                { number: 0, superscript: '+' },
                { number: '#', superscript: '' },
            ], // eslint-disable-line no-magic-numbers

            // By default there is no max length
            // Integer
            maxLength: null,

            // Plug'N'Play button types
            types: [
                'backspace',
                'submit',
            ],

            backspaceTemplate: backspaceTemplate,
            submitTemplate: submitTemplate,

            keysPerRow: 3, // eslint-disable-line no-magic-numbers

        };

    }





    $get() {
        return this.keypadDefaults;
    }


    /**
     * Set a custom backspace button template
     * NOTE: $templateCache is not available yet so we save the template and the controller will
     * handle overwriting the default template
     *
     * @param {String} template
     */
    setBackspaceTemplate(template) {
        this.keypadDefaults.customBackspaceTemplate = template;
    }


    /**
     * Set a custom submit button template
     * NOTE: $templateCache is not available yet so we save the template and the controller will
     * handle overwriting the default template
     *
     * @param {String} template
     */
    setSubmitTemplate(template) {
        this.keypadDefaults.customSubmitTemplate = template;
    }


    /**
     * Overwrite the max length
     *
     * @param {Integer} length
     */
    setMaxLength(length) {
        this.keypadDefaults.maxLength = parseInt(length, 10);
    }


}

