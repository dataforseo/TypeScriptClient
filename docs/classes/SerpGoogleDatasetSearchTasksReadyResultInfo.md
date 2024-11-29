[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksReadyResultInfo

# Class: SerpGoogleDatasetSearchTasksReadyResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksReadyResultInfo()

> **new SerpGoogleDatasetSearchTasksReadyResultInfo**(`data`?): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:57249

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:57234

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:57242

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:57245

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:57239

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#id)

#### Defined in

main.ts:57227

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se)

#### Defined in

main.ts:57229

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:57232

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:57236

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:57258

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:57282

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:57275
