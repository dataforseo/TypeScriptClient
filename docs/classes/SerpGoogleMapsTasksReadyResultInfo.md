[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksReadyResultInfo

# Class: SerpGoogleMapsTasksReadyResultInfo

## Implements

- [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksReadyResultInfo()

> **new SerpGoogleMapsTasksReadyResultInfo**(`data`?): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Defined in

main.ts:41014

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:40999

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:41007

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:41010

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:41004

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:40992

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:40994

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: maps

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:40997

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:41001

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:41023

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:41047

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Defined in

main.ts:41040
