exports.getHome = (req, res) => {
  res.send('QA Portfolio');
};

exports.getHealth = (req, res) => {
  res.json({ status: 'OK' });
};

exports.getAbout = (req, res) => {
  res.send('I am QA Engineer');
};
