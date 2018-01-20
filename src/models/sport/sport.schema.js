import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

const SportSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: mongoose.Types.ObjectId },
  name: String
});

SportSchema.set('toJSON', { getters: true });

const Sport = mongoose.model('Sport', SportSchema, 'sports');

export default Sport;

module.exports.getSport = (root, { id }) => {
  return new Promise((resolve, reject) => {
    Sport.findOne({ id: id }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};

module.exports.updateSport = () => {
  return new Promise((resolve, reject) => {
    Sport.save((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};

module.exports.getSports = () => {
  return new Promise((resolve, reject) => {
    Sport.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};

module.exports.removeSport = (root, { id }) => {
  return new Promise((resolve, reject) => {
    Sport.findOneAndRemove({ id: id }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
