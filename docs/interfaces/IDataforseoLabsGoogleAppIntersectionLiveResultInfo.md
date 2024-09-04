[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsGoogleAppIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

ids of the apps in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:116526

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleAppIntersectionLiveItem`](../classes/DataforseoLabsGoogleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Defined in

main.ts:116536

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:116534

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:116530

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:116528

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:116524

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:116532
