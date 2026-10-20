const submitForm = document.getElementById('game-submit-form');

submitForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(submitForm);

    const newGame = {
        title: formData.get('title'),
        category: formData.get('category'),
        player_count: {
            min: parseInt(formData.get('min_players'), 10),
            max: parseInt(formData.get('max_players'), 10)
        },
        duration_minutes: parseInt(formData.get('duration'), 10),
        tags: formData.get('tags')
            ? formData.get('tags').split(',').map(tag => tag.trim().toLowerCase())
            : [],
        rules: {
            summary: formData.get('summary'),
            setup: formData.get('rules_setup'),
            gameplay: formData.get('rules_gameplay')
        },
        submitted_at: new Date().toISOString()
    };

    console.log("Form submitted with game data:", newGame);

    alert("Thank you! Your submission has been captured.");
});
