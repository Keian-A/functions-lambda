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

    await Friends.delete({ "id": queriedId });

    const response = {
      statusCode: 200,
      body: JSON.stringify({}),
    };

    return response;

  } catch (e) {

    const response = {
      statusCode: 500,
      body: JSON.stringify('Internal server error, could not delete.'),
    };

    return response;

  }
};
