const express = require('express')

const app = express()

app.use(express.static('dist'))

app.listen(8881,function(){
  //8881为配置的端口号
  console.log('请访问http://localhost:8881')
})