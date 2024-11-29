[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo()

> **new KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Defined in

main.ts:146331

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:146323

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:146327

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#function)

#### Defined in

main.ts:146321

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#id)

#### Defined in

main.ts:146317

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#se)

#### Defined in

main.ts:146319

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:146325

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:146340

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:146362

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Defined in

main.ts:146355
