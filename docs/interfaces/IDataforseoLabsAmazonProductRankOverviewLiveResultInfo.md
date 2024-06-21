**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductRankOverviewLiveResultInfo

# Interface: IDataforseoLabsAmazonProductRankOverviewLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsAmazonProductRankOverviewLiveItem`](../classes/DataforseoLabsAmazonProductRankOverviewLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Source

main.ts:105391

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:105389

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:105385

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:105382

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:105379

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:105387
