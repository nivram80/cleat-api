import mongoose from 'mongoose';
import { add } from '../../schema-functions';

mongoose.Promise = require('bluebird');

const SportSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: mongoose.Types.ObjectId },
  name: String
});

SportSchema.set('toJSON', { getters: true });

const Sport = mongoose.model('Sport', SportSchema, 'sports');

module.exports.addSport = (root, { name }) => {
  const newSport = new Sport({ name: name });
  return add(newSport);
};

module.exports.getSport = (root, { id }) => {
  return new Promise((resolve, reject) => {
    Sport.findOne({ id: id }).exec((err, res) => {
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

module.exports.updateSport = (root, { id, name }) => {
  return new Promise((resolve, reject) => {
    Sport.findOneAndUpdate({ id: id }, { name: name }).exec((err, res) => {
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
