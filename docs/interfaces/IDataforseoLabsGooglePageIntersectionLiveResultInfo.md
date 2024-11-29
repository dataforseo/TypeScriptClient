[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGooglePageIntersectionLiveResultInfo

# Interface: IDataforseoLabsGooglePageIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Defined in

main.ts:110433

***

### items?

> `optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](../classes/DataforseoLabsPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Defined in

main.ts:110443

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:110441

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:110437

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:110435

***

### pages?

> `optional` **pages**: `object`

URLs you specified a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:110431

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:110429

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:110439
