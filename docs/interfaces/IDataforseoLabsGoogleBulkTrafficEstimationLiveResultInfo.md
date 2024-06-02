**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsBBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Source

main.ts:101307

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:101305

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:101301

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:101298

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:101295

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:101303
