[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTasksReadyResultInfo

# Class: SerpBingOrganicTasksReadyResultInfo

Defined in: main.ts:63861

## Implements

- [`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTasksReadyResultInfo()

> **new SerpBingOrganicTasksReadyResultInfo**(`data`?): [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

Defined in: main.ts:63886

#### Parameters

##### data?

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:63871

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:63879

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:63882

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:63876

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:63864

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:63866

search engine specified when setting the task

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:63869

type of search engine
example: organic

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:63873

user-defined task identifier

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63895

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:63919

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

Defined in: main.ts:63912

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)
