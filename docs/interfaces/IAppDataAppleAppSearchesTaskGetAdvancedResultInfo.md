[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

Defined in: main.ts:205901

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:205912

direct URL to search engine results
in this case, the value will be null

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:205917

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:205923

found apps

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:205921

the number of items in the results array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:205903

keyword received in a POST request

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:205909

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:205907

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:205905

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:205919

the total number of results
