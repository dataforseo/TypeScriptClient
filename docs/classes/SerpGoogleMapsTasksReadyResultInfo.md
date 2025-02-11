[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksReadyResultInfo

# Class: SerpGoogleMapsTasksReadyResultInfo

Defined in: main.ts:41005

## Implements

- [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksReadyResultInfo()

> **new SerpGoogleMapsTasksReadyResultInfo**(`data`?): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

Defined in: main.ts:41030

#### Parameters

##### data?

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:41015

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:41023

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:41026

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:41020

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:41008

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:41010

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:41013

type of search engine
example: maps

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:41017

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:41039

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:41063

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

Defined in: main.ts:41056

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)
