const path = require('path')
let IMAGE_DATA = path.join(__dirname, '../coolq-data/cq/data/image/send')
let RECORD_DATA = path.join(__dirname, '../coolq-data/cq/data/record/send')
let TEST = 'baibai'
var mongourl = 'mongodb://192.168.17.236:27050/db_bot';
var mongoff14url = 'mongodb://192.168.17.236:27050/db_ff14';
var myip = '192.168.17.236';
const LOCALE_IP = '192.168.17.236'

module.exports = {
  IMAGE_DATA,
  RECORD_DATA,
  TEST,
  mongourl,
  mongoff14url,
  myip,
	LOCALE_IP
}