import mongoose from 'mongoose';

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

  return new Promise((resolve, reject) => {
    newTeam.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
};
