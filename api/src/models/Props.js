const {DataTypes} = require ('sequelize');

module.exports = (sequelize)=>{
sequelize.define('props',{

  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey:true
  },

  nombre:{
   type: DataTypes.STRING,
   allow: false
  }

})

console.log("Hola mundo soy Odette ando probando lo de las branch");
console.log("Hola mundo soy Odette ando probando lo de las branch");
console.log("Hola mundo soy Odette ando probando lo de las branch");


}