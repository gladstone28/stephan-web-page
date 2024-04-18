function showSection(sectionId) {
    // Hide all cards
    document.querySelectorAll('.info-card').forEach(card => {
        card.classList.add('hidden');
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');
}
