const { MongoClient } = require('mongodb')
const connectionString = process.env.ATLAS_URI || "mongodb+srv://waniyashodip1:Yasho@1445@cluster0.3cqrik4.mongodb.net/ "";
const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}
let db = conn.db("sample_training");
export default db;