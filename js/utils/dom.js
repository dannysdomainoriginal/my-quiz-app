const dom = (targetId) => {
    let all = document.querySelectorAll(targetId);
    if (all.length == 1)
        return all[0];
    return all;
};
export default dom;
