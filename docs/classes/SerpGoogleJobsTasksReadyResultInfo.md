**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleJobsTasksReadyResultInfo

# Class: SerpGoogleJobsTasksReadyResultInfo

## Implements

- [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTasksReadyResultInfo(data)

> **new SerpGoogleJobsTasksReadyResultInfo**(`data`?): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Source

main.ts:51384

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:51369

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:51377

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:51380

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:51374

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#id)

#### Source

main.ts:51362

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se)

#### Source

main.ts:51364

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: jobs

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:51367

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#tag)

#### Source

main.ts:51371

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:51393

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:51417

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Source

main.ts:51410
