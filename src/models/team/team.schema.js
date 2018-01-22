import mongoose from 'mongoose';
import { add, get, remove, update } from '../../schema-helpers';

const TeamSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: mongoose.Types.ObjectId },
  city: String,
  mascot: String,
  sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport' }
});

TeamSchema.set('toJSON', { getters: true });

const Team = mongoose.model('Team', TeamSchema, 'teams');

module.exports.addTeam = (root, { city, mascot, sport }) => {
  const newTeam = new Team({
    city: city,
    mascot: mascot,
    sport: sport
  });

  return add(newTeam);
};

module.exports.getTeam = (root, { id }) => get(Team, id);

module.exports.getTeams = () => get(Team);

module.exports.updateTeam = (root, { id, city, mascot, sport }) => {
  const data = {
    city: city,
    mascot: mascot,
    sport: sport
  };

  return update(Team, id, data);
};

module.exports.removeTeam = (root, { id }) => remove(Team, id);
