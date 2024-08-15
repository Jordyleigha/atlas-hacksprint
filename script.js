document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', () => {
        if (playPauseBtn.textContent === '▶️') {
            playPauseBtn.textContent = '⏸️';
            // Add code to play the music
        } else {
            playPauseBtn.textContent = '▶️';
            // Add code to pause the music
        }
    });
});

// Define genre recommendations based on mood and activity
const genreRecommendations = {
    happy: {
        working: "Pop",
        exercising: "Dance",
        relaxing: "Indie",
        partying: "EDM"
    },
    sad: {
        working: "Lo-fi",
        exercising: "Rock",
        relaxing: "Jazz",
        partying: "Acoustic"
    },
    energetic: {
        working: "Upbeat Pop",
        exercising: "Hip Hop",
        relaxing: "Electronic",
        partying: "High-energy Dance"
    },
    chill: {
        working: "Chillhop",
        exercising: "Ambient",
        relaxing: "Classical",
        partying: "Soft Rock"
    }
};

// Function to recommend a genre based on form input
function recommendGenre() {
    const mood = document.getElementById('mood').value;
    const activity = document.getElementById('activity').value;
    const resultElement = document.getElementById('genre-result');
    
    // Ensure valid mood and activity
    if (genreRecommendations[mood] && genreRecommendations[mood][activity]) {
        const recommendedGenre = genreRecommendations[mood][activity];
        resultElement.textContent = `We recommend: ${recommendedGenre}`;
    } else {
        resultElement.textContent = 'Please make sure you have selected both mood and activity.';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const playPauseButton = document.getElementById('play-pause-button');
    const progressBar = document.getElementById('progress-bar');
    
    let isPlaying = false;
    let interval;

    // Simulate song duration in seconds (for demo purposes)
    const songDuration = 300; // 5 minutes
    let currentTime = 0;

    function updateProgressBar() {
        if (isPlaying) {
            currentTime++;
            const progress = (currentTime / songDuration) * 100;
            progressBar.value = progress;

            if (currentTime >= songDuration) {
                isPlaying = false;
                playPauseButton.textContent = '▶️'; // Change button text to play
                clearInterval(interval);
            }
        }
    }

    function togglePlayPause() {
        if (isPlaying) {
            isPlaying = false;
            playPauseButton.textContent = '▶️'; // Change button text to play
            clearInterval(interval);
        } else {
            isPlaying = true;
            playPauseButton.textContent = '⏸️'; // Change button text to pause
            interval = setInterval(updateProgressBar, 1000); // Update progress bar every second
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);

    // Initialize progress bar and controls
    progressBar.max = 100;
    progressBar.value = 0;
});


// Get the back button element
const backButton = document.querySelector('.floating-back-button');

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 200) { // Adjust this value as needed
        backButton.classList.remove('d-none');
    } else {
        backButton.classList.add('d-none');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check
handleScroll();
