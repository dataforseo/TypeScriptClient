[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTasksReadyResultInfo

# Class: SerpSeznamOrganicTasksReadyResultInfo

Defined in: main.ts:83152

## Implements

- [`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksReadyResultInfo()

> **new SerpSeznamOrganicTasksReadyResultInfo**(`data`?): [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

Defined in: main.ts:83177

#### Parameters

##### data?

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:83162

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:83170

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:83173

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:83167

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:83155

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:83157

search engine specified when setting the task

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:83160

type of search engine
example: organic

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:83164

user-defined task identifier

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83186

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:83210

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

Defined in: main.ts:83203

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)
