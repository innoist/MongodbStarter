db.students.find()

//limit the result to be 3

db.students.find({},{"StudentNo":1, "FirstName":1,"_id":0})//returns 5
db.students.find({},{"StudentNo":1, "FirstName":1,"_id":0}).limit(4) //limits the value to give


db.students.find({},{"StudentNo":1, "FirstName":1,"_id":0}).skip(2)//skip the first 2
db.students.find({},{"StudentNo":1, "FirstName":1,"_id":0}).skip(2).limit(1)//skip and limit
