const ParkModel = require('../models/ParkModel');

module.exports = {
    save: (req, res) => {
        let park = new ParkModel({
           name: req.body.name,
        location: req.body.location,
        ranking: req.body.ranking
        })
        park.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },
    create:(req, res)=>{
      let parks=req.body.parks
      parkModel.create(parks)
      .then( result=>{
          res.json({ success: true, result: result})
      })
      .catch(err=>{
        res.json({ success: false, result: err})
      })
    },
    insertMany:(req,res)=>{
      let parks=req.body.parks
      parkModel.insertMany(parks)
      .then( result=>{
          res.json({ success: true, result: result})
      })
      .catch(err=>{
        res.json({ success: false, result: err})
      })

    },
    update: (req, res) => {
    ParkModel.update({_id: req.body._id}, req.body)
    .then(park => {
        if (!park) res.json({ success: false, result: "No such park exists"})

        res.json(park)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },
    find: (req, res) => {
        ParkModel.find()
        .then(park => {
            if (!park) res.json({ success: false, result: "No parks found"})

            res.json({ sucess: true, result: result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },
  findById:(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.body._id)){
          User.findById(req.body._id)
          .then(park => {
              if (!park) res.json({ success: false, result: "No parks exist for this id"})

              res.json({ sucess: true, result: result})
          })
          .catch(err => {
              res.json({ success: false, result: err})
          })
      }},
  findOneAndUpdate:(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.body._id)){
          User.findById({_id:req.body._id},req.body)
          .then(park => {
              if (!park) res.json({ success: false, result: "No parks exist for this id"})

              res.json({ sucess: true, result: result})
          })
          .catch(err => {
              res.json({ success: false, result: err})
          })
    }},
  findOneAndRemove:(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.body._id)){
          User.findById({_id:req.body._id})
          .then(park => {
              if (!park) res.json({ success: false, result: "No parks exist for this id"})

              res.json({ sucess: true, result: result})
          })
          .catch(err => {
              res.json({ success: false, result: err})
          })
  }},
    remove: (req, res) => {
        ParkModel.remove({ _id: req.body._id})
        .then(park => {
            if (!park) res.json({ success: false, result: "No park with such ID was found" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
  },
