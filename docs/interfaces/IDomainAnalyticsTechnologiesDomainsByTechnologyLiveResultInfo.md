[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Defined in

main.ts:78258

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:78250

***

### offset?

> `optional` **offset**: `number`

specified offset value

#### Defined in

main.ts:78252

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:78256

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:78248
