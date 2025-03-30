document.addEventListener('DOMContentLoaded', function() {
    
    addCourse();
    
   
    document.getElementById('add-course').addEventListener('click', addCourse);
    document.getElementById('byo-form').addEventListener('submit', validateForm);
    document.getElementById('reset-btn').addEventListener('click', resetForm);
    document.getElementById('reset-link').addEventListener('click', resetForm);
});

function addCourse() {
    const container = document.getElementById('courses-container');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-entry';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Course name and section (e.g., ITIS 3135-091)';
    input.required = true;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        container.removeChild(courseDiv);
    });
    
    courseDiv.appendChild(input);
    courseDiv.appendChild(deleteBtn);
    container.appendChild(courseDiv);
}

function validateForm(event) {
    event.preventDefault();
    
   
    clearErrors();
    
    let isValid = true;
    
    
    if (!document.getElementById('name').value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    
    if (!document.getElementById('mascot').value.trim()) {
        document.getElementById('mascot-error').textContent = 'Mascot is required';
        isValid = false;
    }
    
    const imageInput = document.getElementById('image');
    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            document.getElementById('image-error').textContent = 'Only JPG or PNG images are allowed';
            isValid = false;
        }
    }
    
    if (!document.getElementById('image-caption').value.trim()) {
        document.getElementById('image-caption-error').textContent = 'Image caption is required';
        isValid = false;
    }
    
    if (!document.getElementById('personal-bg').value.trim()) {
        document.getElementById('personal-bg-error').textContent = 'Personal background is required';
        isValid = false;
    }
    
    if (!document.getElementById('professional-bg').value.trim()) {
        document.getElementById('professional-bg-error').textContent = 'Professional background is required';
        isValid = false;
    }
    
    if (!document.getElementById('academic-bg').value.trim()) {
        document.getElementById('academic-bg-error').textContent = 'Academic background is required';
        isValid = false;
    }
    
    if (!document.getElementById('web-bg').value.trim()) {
        document.getElementById('web-bg-error').textContent = 'Web development background is required';
        isValid = false;
    }
    
    if (!document.getElementById('platform').value.trim()) {
        document.getElementById('platform-error').textContent = 'Primary computer platform is required';
        isValid = false;
    }
    
   
    const courseInputs = document.querySelectorAll('#courses-container input');
    let hasCourses = false;
    courseInputs.forEach(input => {
        if (input.value.trim()) {
            hasCourses = true;
        }
    });
    
    if (!hasCourses) {
        document.querySelector('#courses-container').previousElementSibling.insertAdjacentHTML('afterend', '<div class="error">At least one course is required</div>');
        isValid = false;
    }
    
   
    if (!document.getElementById('agree').checked) {
        document.getElementById('agree-error').textContent = 'You must agree to the terms';
        isValid = false;
    }
    
    if (isValid) {
        displayIntro();
    }
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
    });
}

function displayIntro() {
   
    document.getElementById('intro-form').style.display = 'none';
    document.getElementById('intro-display').style.display = 'block';
    document.getElementById('display-name').textContent = document.getElementById('name').value;
    document.getElementById('display-mascot').textContent = document.getElementById('mascot').value;
    document.getElementById('display-image-caption').textContent = document.getElementById('image-caption').value;
    document.getElementById('display-personal-bg').textContent = document.getElementById('personal-bg').value;
    document.getElementById('display-professional-bg').textContent = document.getElementById('professional-bg').value;
    document.getElementById('display-academic-bg').textContent = document.getElementById('academic-bg').value;
    document.getElementById('display-web-bg').textContent = document.getElementById('web-bg').value;
    document.getElementById('display-platform').textContent = document.getElementById('platform').value;
    document.getElementById('display-funny-thing').textContent = document.getElementById('funny-thing').value;
    document.getElementById('display-anything-else').textContent = document.getElementById('anything-else').value;
    
    const coursesList = document.getElementById('display-courses');
    coursesList.innerHTML = '';
    const courseInputs = document.querySelectorAll('#courses-container input');
    courseInputs.forEach(input => {
        if (input.value.trim()) {
            const li = document.createElement('li');
            li.textContent = input.value;
            coursesList.appendChild(li);
        }
    });
    
    const imageInput = document.getElementById('image');
    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('display-image').src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    } else {
        document.getElementById('display-image-container').style.display = 'none';
    }
}

function resetForm(event) {
    if (event) {
        event.preventDefault();
    }
    
    document.getElementById('intro-form').style.display = 'block';
    document.getElementById('intro-display').style.display = 'none';
    
    document.getElementById('byo-form').reset();
    

    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    addCourse();
    

    clearErrors();
    

    document.getElementById('display-image-container').style.display = 'block';
}