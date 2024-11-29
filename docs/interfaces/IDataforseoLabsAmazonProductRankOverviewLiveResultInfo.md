[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductRankOverviewLiveResultInfo

# Interface: IDataforseoLabsAmazonProductRankOverviewLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductRankOverviewLiveItem`](../classes/DataforseoLabsAmazonProductRankOverviewLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

main.ts:113989

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:113987

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:113983

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:113980

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:113977

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:113985
