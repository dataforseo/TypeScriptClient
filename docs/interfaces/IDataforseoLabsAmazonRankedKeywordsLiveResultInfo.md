[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

Defined in: main.ts:113551

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:113555

ASIN in a POST array

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

Defined in: main.ts:113567

contains detected Amazon product competitors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:113565

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:113561

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:113558

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113553

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:113563

total amount of results in our database relevant to your request
