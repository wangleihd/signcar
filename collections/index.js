const mongoose = require('mongoose');
const url = 'mongodb://10.198.1.215:27017/kailong';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;
//sign报名表
let signSchema = Schema({
  name: { type: String ,trim:true},//名字
  phone: { type: Number ,trim:true},//手机
  qq:{type:Number,default:null,trim:true},//qq
  weixin:{type:String,default:null,trim:true},//微信
  sex:{type:String,default:'男'},//性别
  type:{type:String,trim:true},//驾照类型
  addr:{type:String,trim:true,default:null},//地址
  time:{type:Date,default:Date.now}//时间
});
module.exports.sign = mongoose.model('sign', signSchema);
