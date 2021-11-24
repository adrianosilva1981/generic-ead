let errors = []

class Validation {
  constructor() {
    errors = []
  }
  isRequired(value, message) {
    if (!value || value.length <= 0) {
      errors.push({
        message: message
      })
    }
  }
  hasMinLen(value, min, message, tokenTranslate) {
    if (!value || value.length < min) {
      errors.push({
        message: message
      })
    }
  }
  hasMaxLen(value, max, message, tokenTranslate) {
    if (!value || value.length > max) {
      errors.push({
        message: message
      })
    }
  }
  IsFixedLenght(value, len, message, tokenTranslate) {
    if (value.length !== len) {
      errors.push({
        message: message
      })
    }
  }
  isEmail(value, message, tokenTranslate) {
    const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!reg.test(value)) {
      errors.push({
        message: message
      })
    }
  }
  clear() {
    errors = []
  }
  isValid() {
    return errors.length === 0
  }
  errors() {
    return errors
  }
}

module.exports = Validation