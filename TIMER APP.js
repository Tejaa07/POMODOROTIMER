class Timer {
    constructor() {
        this.timerDisplay = document.querySelector('.timer');
        this.startButton = document.getElementById('start');
        this.stopButton = document.getElementById('stop');
        this.resetButton = document.getElementById('reset');
        this.shortBreakButton = document.getElementById('shortBreak');
        this.longBreakButton = document.getElementById('longBreak');

        this.timeLeft = 25 * 60;
        this.timerId = null;

        this.initializeButtons();
        this.updateDisplay();
    }

    initializeButtons() {
        this.startButton.addEventListener('click', () => this.start());
        this.stopButton.addEventListener('click', () => this.stop());
        this.resetButton.addEventListener('click', () => this.reset());
        this.shortBreakButton.addEventListener('click', () => this.setTime(5));
        this.longBreakButton.addEventListener('click', () => this.setTime(25));
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerDisplay.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                    this.updateDisplay();
                } else {
                    this.stop();
                }
            }, 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    reset() {
        this.stop();
        this.timeLeft = 25 * 60;
        this.updateDisplay();
    }

    setTime(minutes) {
        this.stop();
        this.timeLeft = minutes * 60;
        this.updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Timer();
});