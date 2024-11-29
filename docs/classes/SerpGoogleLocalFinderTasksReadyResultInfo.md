[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTasksReadyResultInfo

# Class: SerpGoogleLocalFinderTasksReadyResultInfo

## Implements

- [`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTasksReadyResultInfo()

> **new SerpGoogleLocalFinderTasksReadyResultInfo**(`data`?): [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Defined in

main.ts:43308

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:43293

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:43301

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:43304

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:43298

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#id)

#### Defined in

main.ts:43286

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se)

#### Defined in

main.ts:43288

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: local_finder

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:43291

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:43295

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:43317

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:43341

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Defined in

main.ts:43334
