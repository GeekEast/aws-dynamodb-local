import dynamoose from 'dynamoose';

// set as local model
dynamoose.aws.ddb.local(process.env.DYNAMO_ENDPOINT);

const schema = new dynamoose.Schema(
  {
    id: String,
    age: Number,
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
