[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

Defined in: main.ts:87989

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

Defined in: main.ts:88001

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:87993

number of items in the results array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:87995

specified offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:87999

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:87991

total number of relevant items in the database
