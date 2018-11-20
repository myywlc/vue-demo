const mockdata = require('./mock/index.json');

module.exports={
  devServer: {
    before(app){
      app.get('/api/index.json',(req,res,next)=>{
        res.json(mockdata);
      })
    }
  }
}