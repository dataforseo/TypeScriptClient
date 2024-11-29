[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Interface: IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

contains keyword search volume data data

#### Defined in

main.ts:112097

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:112095

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:112091

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:112088

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:112085

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:112093
