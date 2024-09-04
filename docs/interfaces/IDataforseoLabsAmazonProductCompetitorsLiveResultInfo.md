[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

ASIN in a POST array

#### Defined in

main.ts:107720

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](../classes/DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

main.ts:107732

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:107730

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:107726

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:107723

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:107718

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:107728
