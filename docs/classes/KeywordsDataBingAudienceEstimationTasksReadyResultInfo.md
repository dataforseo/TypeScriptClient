[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTasksReadyResultInfo

# Class: KeywordsDataBingAudienceEstimationTasksReadyResultInfo

Defined in: main.ts:140664

## Implements

- [`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationTasksReadyResultInfo()

> **new KeywordsDataBingAudienceEstimationTasksReadyResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

Defined in: main.ts:140681

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:140673

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:140677

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#endpoint)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:140671

type of the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#function)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:140667

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:140669

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#se)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:140675

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:140690

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:140712

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

Defined in: main.ts:140705

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)
