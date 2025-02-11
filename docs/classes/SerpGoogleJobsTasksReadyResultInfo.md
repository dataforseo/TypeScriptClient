[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTasksReadyResultInfo

# Class: SerpGoogleJobsTasksReadyResultInfo

Defined in: main.ts:54084

## Implements

- [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTasksReadyResultInfo()

> **new SerpGoogleJobsTasksReadyResultInfo**(`data`?): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

Defined in: main.ts:54109

#### Parameters

##### data?

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:54094

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:54102

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:54105

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:54099

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:54087

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:54089

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:54092

type of search engine
example: jobs

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:54096

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54118

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:54142

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

Defined in: main.ts:54135

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)
