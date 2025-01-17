[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTasksReadyResultInfo

# Class: KeywordsDataBingSearchVolumeTasksReadyResultInfo

Defined in: main.ts:138930

## Implements

- [`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTasksReadyResultInfo()

> **new KeywordsDataBingSearchVolumeTasksReadyResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

Defined in: main.ts:138947

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:138939

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:138943

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#endpoint)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:138937

type of the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#function)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:138933

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:138935

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#se)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:138941

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138956

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138978

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

Defined in: main.ts:138971

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)
