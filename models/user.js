'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rule: {
    type: String,
    enum: ['master', 'executive', 'student'],
    required: true
  },
  dateRegister: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive', 'excluded'],
    default: 'active'
  }
});

module.exports = mongoose.model('User', schema)