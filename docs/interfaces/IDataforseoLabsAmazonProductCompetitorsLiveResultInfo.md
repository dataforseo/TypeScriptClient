[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

ASIN in a POST array

#### Defined in

main.ts:114525

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](../classes/DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

main.ts:114537

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:114535

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:114531

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:114528

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:114523

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:114533
