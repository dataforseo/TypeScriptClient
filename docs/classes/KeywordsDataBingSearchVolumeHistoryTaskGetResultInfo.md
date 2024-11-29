[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo()

> **new KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

#### Defined in

main.ts:146704

## Properties

### device?

> `optional` **device**: `string`[]

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#device)

#### Defined in

main.ts:146693

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:146686

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:146692

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:146689

***

### period?

> `optional` **period**: `string`

time period
indicates if returned data is aggregated to a certain time period
default value monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#period)

#### Defined in

main.ts:146697

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`searches`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#searches)

#### Defined in

main.ts:146700

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:146713

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:146739

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

#### Defined in

main.ts:146732
