import mongoose from 'mongoose';
import { add, get, remove, update } from '../../schema-helpers';

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

module.exports.getSport = (root, { id }) => get(Sport, id);

module.exports.getSports = () => get(Sport);

module.exports.updateSport = (root, { id, name }) => {
  const updatedSport = { name: name };
  return update(Sport, id, updatedSport);
};

module.exports.removeSport = (root, { id }) => remove(Sport, id);
