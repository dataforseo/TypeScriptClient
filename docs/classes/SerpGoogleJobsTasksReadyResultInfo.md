[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTasksReadyResultInfo

# Class: SerpGoogleJobsTasksReadyResultInfo

## Implements

- [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTasksReadyResultInfo()

> **new SerpGoogleJobsTasksReadyResultInfo**(`data`?): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Defined in

main.ts:54093

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:54078

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:54086

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:54089

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:54083

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:54071

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:54073

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: jobs

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:54076

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:54080

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:54102

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:54126

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Defined in

main.ts:54119
