[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

Defined in: main.ts:115225

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asins?

> `optional` **asins**: `object`

Defined in: main.ts:115229

ASINs in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](../classes/DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

Defined in: main.ts:115241

contains detected Amazon product competitors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:115239

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115235

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115232

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:115227

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:115237

total amount of results in our database relevant to your request
