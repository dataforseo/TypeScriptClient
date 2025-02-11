[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppReviewsTasksReadyResultInfo

# Class: AppDataAppleAppReviewsTasksReadyResultInfo

Defined in: main.ts:208680

## Implements

- [`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppReviewsTasksReadyResultInfo()

> **new AppDataAppleAppReviewsTasksReadyResultInfo**(`data`?): [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

Defined in: main.ts:208700

#### Parameters

##### data?

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:208689

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:208693

URL for collecting the results of the Apple App Reviews task

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:208696

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:208683

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:208685

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:208687

search engine type

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:208691

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208709

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:208732

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

Defined in: main.ts:208725

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)
