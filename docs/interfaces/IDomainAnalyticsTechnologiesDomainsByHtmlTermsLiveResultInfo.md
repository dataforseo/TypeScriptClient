[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

Defined in: main.ts:88431

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

Defined in: main.ts:88443

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:88435

number of items in the results array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:88437

specified offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:88441

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:88433

total number of relevant items in the database
