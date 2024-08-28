[**Documentation**](../README.md) • **Docs**

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

main.ts:105176

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:105174

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:105170

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:105167

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:105164

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:105172
