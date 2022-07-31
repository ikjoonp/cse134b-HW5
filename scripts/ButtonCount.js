class ButtonCount extends HTMLElement{
    // AS SEEN IN LECTURE
    constructor() {
        super();

        let count = document.createElement('output');
        count.textContent = 0;

        let button = document.createElement('button');
        button.textContent = 'Times Clicked: ';
        button.append(count);

        button.addEventListener('click', () => {
            count.textContent = Number(count.textContent) + 1;
        })

        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(button);
    }
}
customElements.define('button-count', ButtonCount);
