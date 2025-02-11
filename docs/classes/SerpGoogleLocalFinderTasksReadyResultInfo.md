[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTasksReadyResultInfo

# Class: SerpGoogleLocalFinderTasksReadyResultInfo

Defined in: main.ts:43299

## Implements

- [`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTasksReadyResultInfo()

> **new SerpGoogleLocalFinderTasksReadyResultInfo**(`data`?): [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

Defined in: main.ts:43324

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:43309

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:43317

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:43320

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:43314

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:43302

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:43304

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:43307

type of search engine
example: local_finder

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:43311

user-defined task identifier

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43333

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:43357

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

Defined in: main.ts:43350

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)
