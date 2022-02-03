const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {

  let friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
  });
  // The string 'friends' is the table that data is queried from in dynamodb
  let Friends = dynamoose.model('friends', friendSchema);

  try {
    let queriedName = event.queryStringParameters.name;
    let result = await Friends.create({ "id": uuidv4(), "name": queriedName });

    const response = {
      statusCode: 201,
      body: JSON.stringify(result),
    };

    return response;

  } catch (e) {

    const response = {
      statusCode: 500,
      body: JSON.stringify('Could not create, no name found in query.'),
    };

    return response;
  }
};
