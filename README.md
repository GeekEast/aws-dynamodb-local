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


### Dynamoose Concepts
- `schema`: table **data structure**
- `model`: table **factory**
- `document`: **record**
- `query` is performant compared to `scan` operation
- dynamoose support `transcation`

### References
- [AWS Local DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.UsageNotes.html)
- [DynamoDB ORM: Dynamoose](https://dynamoosejs.com/getting_started/Introduction)
- [Configure Credential for Dynaomoose in AWS](https://dynamoosejs.com/getting_started/Configure#iam-role)
- [Configure DynamoDB locally](https://dynamoosejs.com/getting_started/Configure#local)