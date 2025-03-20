const getResources = (req, res) => {
    // Sample resources data
    const resources = [
        { name: 'Device A', type: 'Hearing Aid', contact: '123-456-7890', website: 'http://deviceA.com', description: 'A great hearing aid for the deaf community.' },
        { name: 'Interpreter Service B', type: 'Interpreters', contact: '987-654-3210', website: 'http://serviceB.com', description: 'Professional interpreting services available.' }
    ];
    res.json(resources);
};

module.exports = { getResources };