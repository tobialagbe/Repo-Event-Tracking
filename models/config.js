const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database/db.sqlite')

const find = (tableName, array)=>{
  
}
const test = async function() {
  /db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  const mz = await db.each("SELECT rowid AS id, info FROM lorem");
}

db.serialize(test);

module.exports = db