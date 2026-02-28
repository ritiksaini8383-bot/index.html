// Function to switch between sections
function nextSection(sectionNum) {
    // Hide current section
    const currentSection = document.querySelector('section.active');
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        currentSection.classList.remove('active');
        
        // Show next section
        const next = document.getElementById(`section${sectionNum}`);
        next.classList.add('active');
        // Small delay to trigger CSS transition
        setTimeout(() => {
            next.style.opacity = '1';
            next.style.transform = 'translateY(0)';
        }, 50);
    }, 500);
}

// Function to create floating hearts
function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Random position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    container.appendChild(heart);
    
    // Remove heart after animation finishes
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate hearts continuously
setInterval(createHeart, 400);

// Special celebration effect for the last button
function celebrate() {
    for (let i = 0; i < 40; i++) {
        setTimeout(createHeart, i * 100);
    }
    alert("Have the best day ever! 🎂🎈");
}