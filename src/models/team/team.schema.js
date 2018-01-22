import mongoose from 'mongoose';
import { add, get } from '../../schema-functions';

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

module.exports.getTeam = (root, { id }) => {
  return get(Team, id);
};

module.exports.getTeams = () => get(Team);

module.exports.updateTeam = (root, { id, city, mascot, sport }) => {
  const data = {
    city: city,
    mascot: mascot,
    sport: sport
  };
  return new Promise((resolve, reject) => {
    Team.findOneAndUpdate({ id: id }, data).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};

module.exports.removeTeam = (root, { id }) => {
  return new Promise((resolve, reject) => {
    Team.findOneAndRemove({ id: id }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};