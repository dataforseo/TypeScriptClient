[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Interface: IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

Defined in: main.ts:112219

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

Defined in: main.ts:112233

contains keyword search volume data data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:112231

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:112227

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:112224

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:112221

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:112229

total amount of results in our database relevant to your request
