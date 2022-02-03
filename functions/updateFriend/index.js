const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  let friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
  });
  // The string 'friends' is the table that data is queried from in dynamodb
  let Friends = dynamoose.model('friends', friendSchema);

  try {

    let queriedId = event.queryStringParameters.id;
    let queriedName = event.queryStringParameters.name;
    let result = await Friends.update({ "id": queriedId, "name": queriedName });

    const response = {
      statusCode: 204,
      body: JSON.stringify(result),
    };

    return response;

  } catch (e) {

    const response = {
      statusCode: 500,
      body: JSON.stringify('Internal server error, could not update.'),
    };

    return response;

  }
};
