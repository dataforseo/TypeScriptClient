[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsAppleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsAppleAppIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

ids of the apps in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:118818

***

### items?

> `optional` **items**: [`DataforseoLabsAppleAppIntersectionLiveItem`](../classes/DataforseoLabsAppleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Defined in

main.ts:118828

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:118826

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:118822

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:118820

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:118816

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:118824
