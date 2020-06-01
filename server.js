let express=require('express');
let mongoose=require('mongoose');
let app =express()
mongoose.connect('mongodb://localhost/parkdb');
console.log('connected');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(3000,()=>console.log("Server started on 3000"))
//controllers
let ParkControl=require('./controllers/ParkControl')
//routes
//creating
app.post('/api/park/create', ParkControl.create)
//updating
app.post('/api/park/update', ParkControl.update)
//retrieving
app.get('/api/park/find', ParkControl.find)
//deleting
app.delete('/api/park/remove', ParkControl.remove)
//other routes
app.post('/api/park/save', ParkControl.save)
app.post('/api/park/findOneAndRemove', ParkControl.findOneAndRemove)
app.post('/api/park/findById', ParkControl.findById)
app.post('/api/park/findOneAndUpdate', ParkControl.findOneAndUpdate)
app.post('/api/park/insertMany', ParkControl.insertMany)
