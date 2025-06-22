import dom from './dom.js'

const progressBar = (params: [number, number]) => {
    let [width, limit] = params
    let progressBar = dom('.progress') as HTMLDivElement

    let percentage = width / limit * 100

    progressBar.style.width = `${percentage}%`

}

export default progressBar