db.students.find()

//if no argument delete the whole table HANDLE WITH CARE
//db.students.remove()

db.students.remove({"_id" : ObjectId("595b6ceceba09a89432ee611")})

//the other way of removing the document, removing multiple docs
//number in last, which is 1 informs the user if you want to remove 1 docs
//if you don't give it will remove the all match docs
db.students.remove({"Age":9}
, 1)