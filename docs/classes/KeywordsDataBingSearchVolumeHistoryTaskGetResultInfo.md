[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

Defined in: main.ts:146752

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo()

> **new KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

Defined in: main.ts:146772

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

## Properties

### device?

> `optional` **device**: `string`[]

Defined in: main.ts:146761

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:146754

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:146760

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:146757

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#location_code)

***

### period?

> `optional` **period**: `string`

Defined in: main.ts:146765

time period
indicates if returned data is aggregated to a certain time period
default value monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#period)

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

Defined in: main.ts:146768

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md).[`searches`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md#searches)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146781

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146807

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)

Defined in: main.ts:146800

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo.md)
