[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTasksReadyResultInfo

# Class: SerpGoogleDatasetInfoTasksReadyResultInfo

Defined in: main.ts:59142

## Implements

- [`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTasksReadyResultInfo()

> **new SerpGoogleDatasetInfoTasksReadyResultInfo**(`data`?): [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

Defined in: main.ts:59167

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:59152

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:59160

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:59163

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:59157

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:59145

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:59147

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:59150

type of search engine
example: dataset_info

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:59154

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59176

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:59200

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

Defined in: main.ts:59193

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)
