const conn = require('../configs/db')

module.exports = {
  insertUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT Users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  signinUser: (email) => {
    return new Promise((resolve, reject) => {
      const error = { Fail: 'email or password false' }
      conn.query(`SELECT * from Users WHERE Email = '${email}'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  registerUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT Users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getData: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT Email, First_name, Last_name FROM `Users` ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  checkData: (email) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM Users WHERE email = '${email}'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}
