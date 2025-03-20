const getJobs = (req, res) => {
    // Sample job data
    const jobs = [
        { title: 'Sign Language Interpreter', company: 'ABC Corp', description: 'Seeking a certified interpreter for various events.' },
        { title: 'Accessibility Consultant', company: 'XYZ Inc', description: 'Help organizations improve accessibility for the deaf community.' }
    ];
    res.json(jobs);
};

module.exports = { getJobs };