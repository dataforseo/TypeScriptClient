[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

# Interface: IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`[]

#### Defined in

main.ts:146768

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:146761

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:146767

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:146764

***

### period?

> `optional` **period**: `string`

time period
indicates if returned data is aggregated to a certain time period
default value monthly

#### Defined in

main.ts:146772

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](../classes/SearchVolumeHistorySearchInfo.md)

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types

#### Defined in

main.ts:146775
