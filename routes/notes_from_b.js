var wxpress = require('express');
var router = wxpress.Router();
const cors = require('cors');// CORSミドルウェアをインポート
require('dotenv').config();

const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());// CORSミドルウェアを適用

router.get('/', async (req, res)=> {
    const database= client.db('notes');
    const notes= database.collection('notes');
    // すべてのドキュメントを取得
    const note = await notes.find({}).toArray();

    res.json(note);
    // 最後にクロースする
});
module.exports = router;
