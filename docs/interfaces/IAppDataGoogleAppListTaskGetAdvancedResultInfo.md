[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppListTaskGetAdvancedResultInfo

Defined in: main.ts:201126

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:201137

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:201142

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:201149

found apps

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:201147

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:201128

app collection received in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201134

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201132

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:201130

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:201144

the total number of results
