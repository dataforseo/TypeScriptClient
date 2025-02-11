[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppInfoTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppInfoTaskGetAdvancedResultInfo

Defined in: main.ts:207399

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:207401

application id received in a POST request

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:207410

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:207415

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:207421

found app info

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:207419

the number of items in the results array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:207407

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:207405

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:207403

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:207417

the total number of results
