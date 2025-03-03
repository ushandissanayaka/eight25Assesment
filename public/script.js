// Section One: Icons Animation
const leftIcons = document.querySelectorAll('.left-icons .icon-box');
const rightIcons = document.querySelectorAll('.right-icons .icon-box');

function animateIcons(icons, delay) {
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        }, index * delay);

        setTimeout(() => {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0)';
        }, (index + icons.length) * delay);
    });
}

setInterval(() => {
    animateIcons(leftIcons, 500);
    animateIcons(rightIcons, 500);
}, 6000);

// Section Two, Three, and Final Section: Text Animation
const textLines = document.querySelectorAll('.text-line');

function animateTextLines() {
    textLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '0';
        }, index * 800); // Fade out each line with a delay
    });

    setTimeout(() => {
        textLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
            }, index * 1000); // Fade in each line with a delay
        });
    }, textLines.length * 1000 + 1000); // Wait for fade out to complete
}

setInterval(animateTextLines, textLines.length * 2000 + 1000); // Repeat animation

// Final Section: Typing Animation
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const text1 = "Eager to Begin";
const text2 = "Your Journey?";
const typingSpeed = 80; // Typing speed in milliseconds
const pauseDuration = 1000; // Pause duration after typing completes

function typeText(element, text, delay) {
    return new Promise((resolve) => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                resolve();
            }
        }, delay);
    });
}

function eraseText(element, delay) {
    return new Promise((resolve) => {
        let i = element.textContent.length;
        const eraseInterval = setInterval(() => {
            if (i > 0) {
                element.textContent = element.textContent.slice(0, -1);
                i--;
            } else {
                clearInterval(eraseInterval);
                resolve();
            }
        }, delay);
    });
}

async function typingAnimation() {
    while (true) {
        // Type the first line
        await typeText(line1, text1, typingSpeed);
        await new Promise((resolve) => setTimeout(resolve, pauseDuration)); // Pause

        // Type the second line
        await typeText(line2, text2, typingSpeed);
        await new Promise((resolve) => setTimeout(resolve, pauseDuration)); // Pause

        // Erase both lines
        await eraseText(line1, typingSpeed / 2);
        await eraseText(line2, typingSpeed / 2);

        // Pause before restarting
        await new Promise((resolve) => setTimeout(resolve, pauseDuration));
    }
}

// Start the typing animation
typingAnimation();