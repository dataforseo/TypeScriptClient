**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Interface: IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

contains keyword search volume data data

#### Source

main.ts:104546

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:104544

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:104540

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:104537

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:104534

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:104542
