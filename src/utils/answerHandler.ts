import dom from "./dom.js";

export default class answerHandler implements answerHandlerType {
    array : Selected[];

    constructor () {
        this.array = []
    }

    pass (id:number) : void {
        let check = dom('input[name="quiz"]:checked') as HTMLInputElement

        console.log(check)
        
        if (check instanceof HTMLElement) {
            let p = check.nextElementSibling as HTMLParagraphElement
            let text = p.innerText as string

            
            let newParams: Selected = {id: id, value: text}
            this.push(newParams)

            check.checked = false
        } else {
            console.log('No check') // Just confirming if it's working
        }
    }

    push (params: Selected) {
        let check = this.array.some(item => item.id === params.id)

        // if (!params.value) return console.log('You dodged an error') // latest debug

        if (check) return this.edit(params)

        this.array.push(params)
        console.log(this.array)
    }

    edit(params: Selected) {
        if (this.array[params.id]) this.array[params.id].value = params.value
        console.log(this.array)
    }

    check (counter: number){
        let check = this.array.find(item => item.id == counter)
        console.log(check)

        if(check) {
            let allParagraphs = dom('label p') as NodeListOf<HTMLParagraphElement>

            let target = [...allParagraphs].find(p => p.textContent?.includes(check.value)) as HTMLParagraphElement
            console.log(target)
            
            if (target) this.highlight(target)
        }
    }

    highlight (target: HTMLParagraphElement) {
        let input = target.previousElementSibling as HTMLInputElement

        input.checked = true
    }

    send () {
        return this.array
    }
}