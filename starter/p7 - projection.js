//PROJECTION means selecting only necessary data rather than selecting whole of the data of a document
db.students.find()
//now we only want to see the firstname, the 1 is boolean. if 0 will not display
db.students.find({},{"FirstName":1})
//disable the default id which always come
db.students.find({},{"FirstName":1, "_id":0})

