import mongoose from 'mongoose';
import { add, get, remove, update } from '../../schema-helpers';

const PlayerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: mongoose.Types.ObjectId },
  firstName: String,
  lastName: String,
  hallOfFame: Boolean
});

PlayerSchema.set('toJSON', { getters: true });

const Player = mongoose.model('Player', PlayerSchema, 'players');

module.exports.addPlayer = (root, { firstName, lastName, hallOfFame }) => {
  const newPlayer = new Player({ firstName: firstName, lastName: lastName, hallOfFame: hallOfFame });
  return add(newPlayer);
};

module.exports.getPlayer = (root, { id }) => get(Player, id);

module.exports.getPlayers = () => get(Player);

module.exports.updatePlayer = (root, { id, firstName, lastName, hallOfFame }) => {
  const updatedPlayer = { firstName: firstName, lastName: lastName, hallOfFame: hallOfFame };
  return update(Player, id, updatedPlayer);
};

module.exports.removePlayer = (root, { id }) => remove(Player, id);
