const mongoose = require('mongoose')


const MONGO_URI = 'mongodb+srv://moore76sc:Tomoe288476!@cluster0.gqcrs.mongodb.net/Sweat_Tracker?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'Most-Wanted-Auth'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

const Session = mongoose.model('Session', sessionSchema);

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});
userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
  if (err) return next(err)
  this.password = hash;
    return next();
  })
});

const User = mongoose.model('User', userSchema);
module.exports = {
  Session,
  User
  };