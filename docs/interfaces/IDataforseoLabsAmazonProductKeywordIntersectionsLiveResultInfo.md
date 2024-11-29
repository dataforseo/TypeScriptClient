[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asins?

> `optional` **asins**: `object`

ASINs in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:115093

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](../classes/DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

main.ts:115105

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:115103

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:115099

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:115096

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:115091

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:115101
