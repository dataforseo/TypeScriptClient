[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

Defined in: main.ts:111701

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)[]

Defined in: main.ts:111715

array of items with relevant traffic estimation data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:111713

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:111709

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:111706

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:111703

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:111711

total amount of results in our database relevant to your request
