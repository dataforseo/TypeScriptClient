[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTasksReadyResultInfo

# Class: KeywordsDataBingAudienceEstimationTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationTasksReadyResultInfo()

> **new KeywordsDataBingAudienceEstimationTasksReadyResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Defined in

main.ts:140449

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:140441

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:140445

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#function)

#### Defined in

main.ts:140439

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#id)

#### Defined in

main.ts:140435

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#se)

#### Defined in

main.ts:140437

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:140443

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:140458

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:140480

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`](KeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Defined in

main.ts:140473
