**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleAppInfoTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppInfoTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

application id received in a POST request

#### Source

main.ts:188003

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:188012

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:188017

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found app info

#### Source

main.ts:188023

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array

#### Source

main.ts:188021

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:188009

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:188007

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:188005

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Source

main.ts:188019
