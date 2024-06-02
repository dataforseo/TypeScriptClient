**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN in a POST array

#### Source

main.ts:103861

***

### items?

> **`optional`** **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Source

main.ts:103873

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:103871

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:103867

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:103864

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:103859

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:103869
