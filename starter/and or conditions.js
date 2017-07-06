db.students.find()
db.students.find({FirstName:"Mark", Age:"10"})

//OR command mark name or age 10
db.students.find({
  $or:[{FirstName:"Mark"},{Age:"10"}]})
  
 //And or query togather:
 db.students.find({
   Age:"10",
  $or:[{FirstName:"Mark"},{Age:"10"}]})
  
 