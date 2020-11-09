import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const response: APIGatewayProxyResult = {
    'statusCode': 200,
    'body': JSON.stringify({
      message: 'hello world',
    })
  }

  return response;
};
