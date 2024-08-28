[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTasksReadyResultInfo

# Class: KeywordsDataBingSearchVolumeTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTasksReadyResultInfo()

> **new KeywordsDataBingSearchVolumeTasksReadyResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Defined in

main.ts:131715

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:131707

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:131711

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#function)

#### Defined in

main.ts:131705

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#id)

#### Defined in

main.ts:131701

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#se)

#### Defined in

main.ts:131703

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:131709

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:131724

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:131746

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Defined in

main.ts:131739
