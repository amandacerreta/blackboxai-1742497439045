const getDiscussions = (req, res) => {
    // Sample discussions data
    const discussions = [
        { title: 'Access to Education', posts: ['Post 1', 'Post 2'] },
        { title: 'Workplace Accommodations', posts: ['Post 1', 'Post 2'] }
    ];
    res.json(discussions);
};

module.exports = { getDiscussions };