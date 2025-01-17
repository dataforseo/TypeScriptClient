[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksReadyResultInfo

# Class: SerpYahooOrganicTasksReadyResultInfo

Defined in: main.ts:75620

## Implements

- [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksReadyResultInfo()

> **new SerpYahooOrganicTasksReadyResultInfo**(`data`?): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

Defined in: main.ts:75645

#### Parameters

##### data?

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:75630

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:75638

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:75641

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:75635

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:75623

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:75625

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:75628

type of search engine
example: organic

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:75632

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:75654

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:75678

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

Defined in: main.ts:75671

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)
