**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTasksReadyResultInfo

# Class: AppDataGoogleAppReviewsTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTasksReadyResultInfo(data)

> **new AppDataGoogleAppReviewsTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Source

main.ts:190302

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:190291

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Reviews task

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:190295

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:190298

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#id)

#### Source

main.ts:190285

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se)

#### Source

main.ts:190287

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:190289

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

#### Source

main.ts:190293

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:190311

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:190334

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Source

main.ts:190327
