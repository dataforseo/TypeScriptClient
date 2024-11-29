[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTasksReadyResultInfo

# Class: SerpNaverOrganicTasksReadyResultInfo

## Implements

- [`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTasksReadyResultInfo()

> **new SerpNaverOrganicTasksReadyResultInfo**(`data`?): [`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:81007

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:80992

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:81000

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:81003

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:80997

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:80985

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:80987

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:80990

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:80994

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:81016

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:81040

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:81033
