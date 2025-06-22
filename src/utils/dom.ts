// Javascript Document Object Model
const dom = (targetId: string) => {
    let all = document.querySelectorAll(targetId) as NodeListOf<HTMLElement>

    if(all.length == 1 ) return all[0] as HTMLElement
    
    return all
}

export default dom