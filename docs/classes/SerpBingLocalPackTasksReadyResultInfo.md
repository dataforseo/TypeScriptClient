[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTasksReadyResultInfo

# Class: SerpBingLocalPackTasksReadyResultInfo

Defined in: main.ts:67083

## Implements

- [`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTasksReadyResultInfo()

> **new SerpBingLocalPackTasksReadyResultInfo**(`data`?): [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

Defined in: main.ts:67108

#### Parameters

##### data?

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md)

#### Returns

[`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:67093

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:67101

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:67104

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:67098

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:67086

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`id`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:67088

search engine specified when setting the task

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`se`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:67091

type of search engine
example: local_pack

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:67095

user-defined task identifier

#### Implementation of

[`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:67117

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:67141

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

Defined in: main.ts:67134

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)
