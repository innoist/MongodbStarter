use school
db.students.find()//find all the records
db.students.find().pretty()
//finds the first document
db.students.findOne()
//Querying data base on condition
db.students.find({Age:"10"})
//condition
db.students.find({Age: {$gt:"15"}})
//greater equal
db.students.find({Age: {$gte:"15"}})
//less than equal
db.students.find({Age: {$lte:"15"}})
//Not equk
db.students.find({Age: {$ne:"10"}})





