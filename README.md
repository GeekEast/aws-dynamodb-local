## Local DynamoDB

This is a sample repo to create `dynamoDB` locally for **develop** and **testing** purpose using docker-compose.

### Commands
- create dynamoDB services locally
```sh
yarn db:create
```
- start the DynamoDB management Interface
```sh
yarn db:admin
```
- logging docker-compose
```sh
yarn db:logs
```

### Config
- config the dynamoDB `port` in `.env.local`
```sh
DYNAMO_PORT=8040
DYNAMO_ENDPOINT=http://localhost:8040
```

### References
- [AWS Local DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.UsageNotes.html)
- [DynamoDB ORM: Dynamoose](https://dynamoosejs.com/getting_started/Introduction)