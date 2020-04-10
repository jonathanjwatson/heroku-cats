const connection = require("./connection");

const orm = {
  selectAll: function (tableName, cb) {
    const queryString = `SELECT * FROM ${tableName}`;
    connection.query(queryString, function (err, data) {
      cb(err, data);
    });
  },
  deleteById: function (tableName, id, cb) {
    const queryString = `DELETE FROM ${tableName} WHERE id = ${id}`;
    connection.query(queryString, function (err, data) {
      cb(err, data);
    });
  },
};

module.exports = orm;
