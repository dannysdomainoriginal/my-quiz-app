import dom from "./dom.js";
export default class answerHandler {
    array;
    constructor() {
        this.array = [];
    }
    pass(id) {
        let check = dom('input[name="quiz"]:checked');
        console.log(check);
        if (check instanceof HTMLElement) {
            let p = check.nextElementSibling;
            let text = p.innerText;
            let newParams = { id: id, value: text };
            this.push(newParams);
            check.checked = false;
        }
        else {
            console.log('No check');
        }
    }
    push(params) {
        let check = this.array.some(item => item.id === params.id);
        console.log(params, check);
        if (check)
            return this.edit(params);
        this.array.push(params);
    }
    edit(params) {
        if (this.array[params.id])
            this.array[params.id].value = params.value;
        console.log(this.array);
    }
    check(counter) {
        let check = this.array.find(item => item.id == counter);
        console.log(check);
        if (check) {
            let allParagraphs = dom('label p');
            let target = [...allParagraphs].find(p => p.textContent?.includes(check.value));
            console.log(target);
            if (target)
                this.highlight(target);
        }
    }
    highlight(target) {
        let input = target.previousElementSibling;
        input.checked = true;
    }
    send() {
        return this.array;
    }
}
