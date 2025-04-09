const Track = require('../models/Track');

exports.getTracks = async (req, res) => {
  const tracks = await Track.find();
  res.json(tracks);
};

exports.addTrack = async (req, res) => {
  const newTrack = new Track(req.body);
  await newTrack.save();
  res.status(201).json(newTrack);
};
