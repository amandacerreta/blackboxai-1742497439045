const getInspirations = (req, res) => {
    // Sample inspirations data
    const inspirations = [
        { title: 'Celebrity A', description: 'An inspiring story about Celebrity A and their journey with cochlear implants.', imageUrl: 'imageA.jpg' },
        { title: 'Influencer B', description: 'Influencer B shares their experiences and challenges.', imageUrl: 'imageB.jpg' }
    ];
    res.json(inspirations);
};

module.exports = { getInspirations };