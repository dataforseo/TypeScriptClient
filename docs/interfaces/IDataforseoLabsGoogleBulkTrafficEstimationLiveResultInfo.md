[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsBBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Defined in

main.ts:101204

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:101202

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:101198

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:101195

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:101192

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:101200
