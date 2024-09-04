[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo

# Class: KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo()

> **new KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo**(`data`?): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:137280

## Properties

### items?

> `optional` **items**: [`KeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](KeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)[]

contains keywords and related data

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md#items)

#### Defined in

main.ts:137276

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md#items_count)

#### Defined in

main.ts:137274

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:137272

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:137289

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:137312

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:137305
