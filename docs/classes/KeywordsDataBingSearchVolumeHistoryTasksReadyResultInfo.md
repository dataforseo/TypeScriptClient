[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo

Defined in: main.ts:146382

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo()

> **new KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

Defined in: main.ts:146399

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:146391

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:146395

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#endpoint)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:146389

type of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#function)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:146385

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:146387

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#se)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:146393

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146408

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146430

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)

Defined in: main.ts:146423

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResultInfo.md)
