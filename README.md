# functions-lambda
Repo for lambda functions

Root URL for all ReSTful CRUD:
* https://86e44xwbbd.execute-api.us-west-2.amazonaws.com/beta

ReSTful PATHS:

GET to `/friends`, this returns an object of all items currently stored on the dynamoDB.

GET to `/friend/id`, include the ID for the item you want returned in the query, this returns a specific object queried from the id specified.

POST to `/friend`, include the name for the item you want added in the query, this returns the object added.

PUT to `/friend/id`, include the ID for the item searched for, and the name you want the item name updated to in the query, this returns an empty object, but adds an item to the dynamoDB (you can check with the GET to `/friends` route above).

DELETE to `/friend/id`, include the ID of the item you wish to be deleted in the query, this returns an empty object, but you can view the list and see the item removed with the above GET request to `/friends`.
