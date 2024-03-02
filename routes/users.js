const mongoose = require('mongoose');
<<<<<<< HEAD
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/instaclone');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String, 
  password: String,
  profileImage: String,
  bio: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "post"}]
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);   
=======
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instainsta");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
>>>>>>> 920173667d39b42221dfbc256fe2b1e87fc58ca2
