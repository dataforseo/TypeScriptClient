[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeHistoryLiveResultInfo

# Interface: IKeywordsDataBingSearchVolumeHistoryLiveResultInfo

Defined in: main.ts:147443

## Indexable

\[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`[]

Defined in: main.ts:147452

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:147445

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:147451

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147448

location code in a POST array
if there is no data, then the value is null

***

### period?

> `optional` **period**: `string`

Defined in: main.ts:147456

time period
indicates if returned data is aggregated to a certain time period
default value monthly

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](../classes/SearchVolumeHistorySearchInfo.md)

Defined in: main.ts:147459

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types
