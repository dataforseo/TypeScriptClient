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

main.ts:50515

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:50500

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:50508

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:50511

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:50505

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#id)

#### Source

main.ts:50493

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se)

#### Source

main.ts:50495

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: jobs

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:50498

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#tag)

#### Source

main.ts:50502

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:50524

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:50548

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Source

main.ts:50541
