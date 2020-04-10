const orm = require("../config/orm");

const cat = {
    getAllCats: function(cb){
        orm.selectAll('cats', function(err, data){
            cb(err, data)
        });
    },
    deleteCatById: function(id, cb){
        orm.deleteById('cats', id, function(err, data){
            cb(err, data);
        })
    }
}

module.exports = cat;