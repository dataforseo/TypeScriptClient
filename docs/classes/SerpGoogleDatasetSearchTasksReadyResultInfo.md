[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksReadyResultInfo

# Class: SerpGoogleDatasetSearchTasksReadyResultInfo

Defined in: main.ts:57240

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksReadyResultInfo()

> **new SerpGoogleDatasetSearchTasksReadyResultInfo**(`data`?): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

Defined in: main.ts:57265

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:57250

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:57258

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:57261

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:57255

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:57243

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:57245

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:57248

type of search engine
example: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:57252

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:57274

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:57298

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

Defined in: main.ts:57291

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)
