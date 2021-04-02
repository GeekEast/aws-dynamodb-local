import dynamoose from 'dynamoose';
dynamoose.aws.ddb.local(process.env.DYNAMO_ENDPOINT);