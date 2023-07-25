const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

module.exports = waitFor;