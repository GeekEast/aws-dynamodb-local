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
### DynamoDB
- managed no-sql db service from aws
- scalable, reliable

#### Use Case
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2021-04-02-15-48-47.png alt="no image found"></p>

#### Concepts
- table: just a 2d table, but schemaless
- item: one record
- data types:
  - scalar: Number, String, Binary, Boolean and Null
  - Document: List and Map
  - Set: Number Set, String Set and Binary Set
- partition key: mandatory, used to partition data, also called `Hash Key`
- sort key: useful to query the data relating a Partition Key, also called `Range Key`
- primary key: the combination of partition key and sort key.
- secondary index: used to query based on indexed attributes other than partition key.

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2021-04-02-15-11-50.png alt="no image found"></p>

#### Tables
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2021-04-02-14-58-50.png alt="no image found"></p>


`Partition Key`(**required**): `authorId`, cannot be changed after creating the item
`Sort Key`(**optional**): can be `publicationDate`

Item 1 and Item 3 have the same `Partition Key`
There is no limits on how many items can be stored in a table.

#### Data Modeling

- start with an ERD
- define the access pattern
- define the primary key and secondary indexes

Forget about relational experience
- normalization, duplicate data is allowed in dynamodb
- joins, dynamodb doesn't support joins in database level
- one entity type per table, dynamodb is schemaless.


Principles:
- **try to put everything in one table, even different thing**
- **every query need a partition key**
- **partition key should be as much unique as possible**
- **no join for dynamodb since no-sql db is pre-joined db**

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
- [Core concepts of Amazon DynamoDB](https://medium.com/tensult/core-concepts-of-amazon-dynamodb-a265a3fc70a)
- [Difference between AWS DynamoDB vs AWS DocumentDB vs MongoDB?](https://medium.com/@caseygibson_42696/difference-between-aws-dynamodb-vs-aws-documentdb-vs-mongodb-9cb026a94767)
- [Build On DynamoDB | S1 E2 – Intro to NoSQL Data Modeling with Amazon DynamoDB](https://www.youtube.com/watch?v=Rmf8mrJ3X2s&ab_channel=AmazonWebServices)