[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleAppReviewsTasksReadyResultInfo

# Class: AppDataAppleAppReviewsTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppReviewsTasksReadyResultInfo()

> **new AppDataAppleAppReviewsTasksReadyResultInfo**(`data`?): [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:195780

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:195769

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:195773

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:195776

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:195763

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:195765

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:195767

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:195771

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:195789

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:195812

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:195805
