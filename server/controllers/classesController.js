const getClasses = (req, res) => {
    // Sample classes data
    const classes = [
        { title: 'Sign Language Basics', date: '2023-09-15', description: 'Learn the fundamentals of sign language.' },
        { title: 'Deaf Culture Awareness', date: '2023-09-22', description: 'Understanding the deaf community and culture.' }
    ];
    res.json(classes);
};

module.exports = { getClasses };