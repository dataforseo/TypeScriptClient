[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTasksReadyResultInfo

# Class: SerpBingLocalPackTasksReadyResultInfo

## Implements

- [`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTasksReadyResultInfo()

> **new SerpBingLocalPackTasksReadyResultInfo**(`data`?): [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md)

#### Returns

[`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Defined in

main.ts:67072

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:67057

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:67065

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:67068

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:67062

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`id`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#id)

#### Defined in

main.ts:67050

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`se`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#se)

#### Defined in

main.ts:67052

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: local_pack

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:67055

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:67059

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:67081

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:67105

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Defined in

main.ts:67098
