**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

# Interface: IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### device?

> **`optional`** **device**: `string`[]

#### Source

main.ts:138186

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Source

main.ts:138179

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:138185

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:138182

***

### period?

> **`optional`** **period**: `string`

time period
indicates if returned data is aggregated to a certain time period
default value monthly

#### Source

main.ts:138190

***

### searches?

> **`optional`** **searches**: [`SearchVolumeHistorySearchInfo`](../classes/SearchVolumeHistorySearchInfo.md)

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types

#### Source

main.ts:138193
