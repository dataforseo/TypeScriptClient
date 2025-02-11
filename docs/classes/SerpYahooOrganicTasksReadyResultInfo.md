[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksReadyResultInfo

# Class: SerpYahooOrganicTasksReadyResultInfo

Defined in: main.ts:75656

## Implements

- [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksReadyResultInfo()

> **new SerpYahooOrganicTasksReadyResultInfo**(`data`?): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

Defined in: main.ts:75681

#### Parameters

##### data?

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:75666

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:75674

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:75677

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:75671

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:75659

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:75661

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:75664

type of search engine
example: organic

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:75668

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:75690

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:75714

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

Defined in: main.ts:75707

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)
