// Create a hidden file input
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

const changeBtn = document.querySelector('.btn-profile-change');
const profileImg = document.querySelector('.account-box img');

changeBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.size < 2 * 1024 * 1024) { // limit: 2MB
        
        const reader = new FileReader();
        reader.onload = () => {
            profileImg.src = reader.result;
        };
        reader.readAsDataURL(file);
        
    } else {
        alert('Please upload an image smaller than 2MB');
    }
});