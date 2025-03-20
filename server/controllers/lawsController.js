const getLaws = (req, res) => {
    // Sample laws data
    const laws = [
        { title: 'Americans with Disabilities Act', description: 'A law that prohibits discrimination against individuals with disabilities.' },
        { title: 'Rehabilitation Act', description: 'A law that protects the rights of individuals with disabilities in programs receiving federal funding.' }
    ];
    res.json(laws);
};

module.exports = { getLaws };