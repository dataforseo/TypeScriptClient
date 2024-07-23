**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo(data)

> **new KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Source

main.ts:137749

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:137741

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:137745

***

### function?

> **`optional`** **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#function)

#### Source

main.ts:137739

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#id)

#### Source

main.ts:137735

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#se)

#### Source

main.ts:137737

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#tag)

#### Source

main.ts:137743

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:137758

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:137780

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Source

main.ts:137773
