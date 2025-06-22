import dom from './dom.js';
const progressBar = (params) => {
    let [width, limit] = params;
    let progressBar = dom('.progress');
    let percentage = width / limit * 100;
    progressBar.style.width = `${percentage}%`;
};
export default progressBar;
