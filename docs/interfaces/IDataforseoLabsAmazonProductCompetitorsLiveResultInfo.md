**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN in a POST array

#### Source

main.ts:105927

***

### items?

> **`optional`** **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](../classes/DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Source

main.ts:105939

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:105937

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:105933

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:105930

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:105925

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:105935
