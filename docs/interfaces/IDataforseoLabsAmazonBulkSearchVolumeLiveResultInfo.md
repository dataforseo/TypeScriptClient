[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Interface: IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

Defined in: main.ts:112151

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

Defined in: main.ts:112165

contains keyword search volume data data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:112163

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:112159

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:112156

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:112153

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:112161

total amount of results in our database relevant to your request
