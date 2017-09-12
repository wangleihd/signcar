const mongoose = require('mongoose');
const url = 'mongodb://ll:ll@ds133004.mlab.com:33004/lzc';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
});
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
//管理员表
let adminSchema = Schema({
  adminName:{type:String,trim:true},//管理员名
  adminPass:{type:String,trim:true},//管理员密码
  power:{type:Number,default:2},//管理员权限，超级管理员权限为１，普通管理员为２
  time:{type:Date,default:Date.now}//时间
});
module.exports.admin = mongoose.model('admin',adminSchema);
