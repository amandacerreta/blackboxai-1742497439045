const getTips = (req, res) => {
    // Sample tips data
    const tips = [
        { title: 'Effective Communication', content: 'Use clear and concise language when communicating.' },
        { title: 'Utilize Technology', content: 'Explore apps and devices that enhance communication.' }
    ];
    res.json(tips);
};

module.exports = { getTips };