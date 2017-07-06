use mydbtest
db.createCollection("myCollection")
show collections

//SECOND WAY TO CREATE COLLECTIONS
//JSON KEY VALUE PAIR
db.myCollection2.insert({"name":"max"});//create collection if not present.
//if already present insert the document
show collections
//drop collection
db.myCollection.drop()

show collections