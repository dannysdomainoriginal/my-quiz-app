// Javascript Document Object Model
const dom = (targetId: string) => {
    let target = document.querySelectorAll(targetId)

    if(target.length == 1 ) return document.querySelector(targetId)
    
    return target
}

export default dom