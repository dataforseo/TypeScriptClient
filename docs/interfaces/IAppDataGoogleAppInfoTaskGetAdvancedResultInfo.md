[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppInfoTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppInfoTaskGetAdvancedResultInfo

Defined in: main.ts:202939

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:202941

application id received in a POST request

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:202950

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:202955

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:202961

found app info

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:202959

the number of items in the results array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:202947

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:202945

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:202943

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:202957

the total number of results
