// Progress Circle Animation
/*
function updateProgress(percentage) {
    const progressPath = document.getElementById('progressPath');
    const progressText = document.getElementById('progressText');
    
    // Calculate the path length for the semi-circle
    const pathLength = 251.2; // Approximate length of the semi-circle path
    const offset = pathLength - (pathLength * percentage / 100);
    
    // Update the stroke-dasharray and stroke-dashoffset
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = offset;
    
    // Update the text
    progressText.textContent = percentage.toFixed(2) + ' %';
    
    // Change color based on percentage
    let color;
    if (percentage <= 25) {
        color = '#e74c3c'; // Red
    } else if (percentage <= 50) {
        color = '#f39c12'; // Orange
    } else if (percentage <= 75) {
        color = '#f1c40f'; // Yellow
    } else {
        color = '#7cb342'; // Green
    }
    
    progressPath.style.stroke = color;
    
    // Add animation effect
    progressPath.style.transition = 'stroke-dashoffset 1s ease-in-out, stroke 0.5s ease';
}

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date('2024-12-31 23:59:59').getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

// Progress Bar Animation
function animateProgressBars() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        // Remove animation to keep colors static
        if (step.classList.contains('completed')) {
            // Keep completed steps static
        }
    });
}

// Auto Progress Demo
// function autoProgressDemo() {
//     let currentProgress = 0;
//     const interval = setInterval(() => {
//         currentProgress += 5;
//         updateProgress(currentProgress);
//         
//         if (currentProgress >= 100) {
//             currentProgress = 0;
//         }
//     }, 2000);
//     
//     // Stop auto demo after 30 seconds
//     setTimeout(() => {
//         clearInterval(interval);
//         updateProgress(35); // Reset to default
//     }, 30000);
// }

// Smooth Scrolling for Better UX
function smoothScrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Add click effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('.controls button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple effect
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .controls button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial progress
    updateProgress(35);
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Animate progress bars on load
    setTimeout(animateProgressBars, 1000);
    
    // Add button effects
    addButtonEffects();
    addRippleCSS();
    
    // Add hover effects to progress steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            if (!this.classList.contains('current') && !this.classList.contains('completed')) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            if (!this.classList.contains('current') && !this.classList.contains('completed')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            }
        });
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive features
function addInteractiveFeatures() {
    // Click on progress circle to cycle through values
    const progressCircle = document.querySelector('.progress-circle');
    const values = [25, 50, 75, 100, 35];
    let currentIndex = 4; // Start with 35%
    
    progressCircle.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % values.length;
        updateProgress(values[currentIndex]);
    });
    
    // Add tooltip to progress circle
    progressCircle.title = 'اضغط لتغيير نسبة الإنجاز';
    progressCircle.style.cursor = 'pointer';
}

// Call interactive features after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addInteractiveFeatures, 2000);
});*/

// Progress Circle Animation
const PROGRESS_VALUE = 35; // غير هذه القيمة لتغيير نسبة الإنجاز (0-100)
const progressPath = document.getElementById('progressPath');
const progressText = document.getElementById('progressText');

function updateProgress(percentage) {
    const circumference = 188.5; // Approximate circumference of the semi-circle
    const offset = circumference - (percentage / 100) * circumference;
    
    progressPath.style.strokeDasharray = circumference;
    progressPath.style.strokeDashoffset = offset;
    
    // Keep the green color always
    progressPath.style.stroke = '#7cb342';
    // إعادة التأكيد على الأطراف المستقيمة في كل تحديث
    progressPath.setAttribute('stroke-linecap', 'square');
    progressPath.style.strokeLinecap = 'square';
    progressText.textContent = percentage.toFixed(2) + ' %';
}

// Animate progress
function animateProgress() {
    currentProgress += Math.random() * 2 - 1; // Random change between -1 and +1
    if (currentProgress < 0) currentProgress = 0;
    if (currentProgress > 100) currentProgress = 100;
    
    updateProgress(currentProgress);
}

// Initialize progress with the set value
updateProgress(PROGRESS_VALUE);

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2025-12-31 23:59:59').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(3, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);


// Add some interactive effects
document.querySelectorAll('.timeline-step').forEach(step => {
    step.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    step.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Loading animation for black screen
let loadingDots = 0;
setInterval(() => {
    loadingDots = (loadingDots + 1) % 4;
    const dots = '.'.repeat(loadingDots);
    // You can add loading text here if needed
}, 500);