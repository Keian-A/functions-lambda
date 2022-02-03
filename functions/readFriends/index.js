const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  let friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
  });

  // The string 'friends' is the table that data is queried from in dynamodb
  let Friends = dynamoose.model('friends', friendSchema);

  try {

    // let result = await Friends.scan().exec();
    result = await Friends.scan().exec();

    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    return response;

  } catch (e) {

    const response = {
      statusCode: 400,
      body: JSON.stringify('Data not found'),
    };

    return response;

  }
};
