[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTasksReadyResultInfo

# Class: AppDataGoogleAppReviewsTasksReadyResultInfo

Defined in: main.ts:203668

## Implements

- [`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTasksReadyResultInfo()

> **new AppDataGoogleAppReviewsTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

Defined in: main.ts:203688

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:203677

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:203681

URL for collecting the results of the Google App Reviews task

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:203684

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:203671

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:203673

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:203675

search engine type

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:203679

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203697

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203720

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

Defined in: main.ts:203713

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)
