[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo

Defined in: main.ts:200613

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:200624

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:200629

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:200635

found apps

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:200633

the number of items in the results array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:200615

keyword received in a POST request

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:200621

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:200619

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:200617

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:200631

the total number of results
