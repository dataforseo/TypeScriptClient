[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLiveResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryLiveResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLiveResultInfo()

> **new KeywordsDataBingSearchVolumeHistoryLiveResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLiveResultInfo`](KeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveResultInfo`](KeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

#### Defined in

main.ts:138398

## Properties

### device?

> `optional` **device**: `string`[]

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#device)

#### Defined in

main.ts:138387

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#keyword)

#### Defined in

main.ts:138380

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#language_code)

#### Defined in

main.ts:138386

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#location_code)

#### Defined in

main.ts:138383

***

### period?

> `optional` **period**: `string`

time period
indicates if returned data is aggregated to a certain time period
default value monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#period)

#### Defined in

main.ts:138391

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`searches`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#searches)

#### Defined in

main.ts:138394

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:138407

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:138433

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLiveResultInfo`](KeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveResultInfo`](KeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

#### Defined in

main.ts:138426
