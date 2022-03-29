const AWS = require('aws-sdk');

const updateTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const { done, title, description } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: 'TaskTable',
      Key: { id },
      UpdateExpression:
        'set done = :done, title = :title, description = :description',
      ExpressionAttributeValues: {
        //CON ESTO LE ASIGNAMOS un valor a done , es como el $!
        ':done': done,
        ':title': title,
        ':description': description,
      },
      ReturnValues: 'ALL_NEW', //para que nos retorne el valor actual
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify({ message: 'Task updated successfully' }),
  };
};

module.exports = {
  updateTask,
};
