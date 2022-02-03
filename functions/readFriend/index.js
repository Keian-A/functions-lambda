const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  let friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
  });

  // The string 'friends' is the table that data is queried from in dynamodb
  let Friends = dynamoose.model('friends', friendSchema);

  try {

    const queriedID = event.queryStringParameters.id;
    let result = await Friends.query('id').eq(queriedID).exec();

    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    return response;

  } catch (e) {

    const response = {
      statusCode: 400,
      body: JSON.stringify('Friend not found'),
    };

    return response;

  }
}