use school
db.students.find()


//update if id = "595b6ba6eba09a89432ee602" change last name

db.students.update({ "_id" : ObjectId("595b6ba6eba09a89432ee602")},

{$set:{LastName:"Modified"}})

//update multiple documents based on some condition
//just as an example multiple student have age 10
//the below will update only one, but we need to give one more option multi:true to update everything

db.students.update({ "Age" : "10"},

{$set:{LastName:"Modified2"}},
{multi:true}
)
//update the whole record
db.students.save()