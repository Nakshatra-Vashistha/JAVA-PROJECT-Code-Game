class StoryGame {
    constructor() {
        this.currentScene = 0;
        this.scenes = [
            {
                characters: [
                    { name: "Hero", image: "", dialogue: "Our adventure begins now!" },
                    { name: "Mentor", image: "", dialogue: "Be careful, danger lurks ahead." },
                    { name: "Sidekick", image: "", dialogue: "I'm ready to help!" },
                    { name: "Villain", image: "", dialogue: "You'll never stop me!" }
                ]
            },
            {
                characters: [
                    { name: "Hero", image: "", dialogue: "We must stop the villain's plan!" },
                    { name: "Mentor", image: "", dialogue: "Strategy is key to success." },
                    { name: "Sidekick", image: "", dialogue: "I have a brilliant idea!" },
                    { name: "Villain", image: "", dialogue: "Your efforts are futile!" }
                ]
            }
            // Add more scenes here
        ];

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('next-scene').addEventListener('click', () => this.advanceScene());
        document.getElementById('reset-story').addEventListener('click', () => this.resetStory());
    }

    advanceScene() {
        this.currentScene++;
        if (this.currentScene >= this.scenes.length) {
            this.currentScene = 0; // Loop back to start
        }
        this.updateScene();
    }

    resetStory() {
        this.currentScene = 0;
        this.updateScene();
    }

    updateScene() {
        const scene = this.scenes[this.currentScene];
        
        scene.characters.forEach((character, index) => {
            const card = document.getElementById(`character${index + 1}`);
            card.querySelector('.character-name').textContent = character.name;
            card.querySelector('.character-image').src = character.image;
            card.querySelector('.dialogue-text').textContent = character.dialogue;
        });
    }

    // Method to allow dynamic scene/character updates
    updateCharacter(characterIndex, newData) {
        this.scenes[this.currentScene].characters[characterIndex] = {
            ...this.scenes[this.currentScene].characters[characterIndex],
            ...newData
        };
        this.updateScene();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new StoryGame();
    game.updateScene(); // Initial scene setup
});
