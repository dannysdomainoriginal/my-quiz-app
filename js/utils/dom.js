const dom = (targetId) => {
    let target = document.querySelectorAll(targetId);
    if (target.length == 1)
        return document.querySelector(targetId);
    return target;
};
export default dom;
