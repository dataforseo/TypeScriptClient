[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTasksReadyResultInfo

# Class: SerpGoogleOrganicTasksReadyResultInfo

Defined in: main.ts:27921

## Implements

- [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTasksReadyResultInfo()

> **new SerpGoogleOrganicTasksReadyResultInfo**(`data`?): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

Defined in: main.ts:27946

#### Parameters

##### data?

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:27931

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:27939

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:27942

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:27936

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:27924

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:27926

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:27929

type of search engine
example: organic

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:27933

user-defined task identifier

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27955

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27979

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

Defined in: main.ts:27972

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)
