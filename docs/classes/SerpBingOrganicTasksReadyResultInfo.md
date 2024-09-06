[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingOrganicTasksReadyResultInfo

# Class: SerpBingOrganicTasksReadyResultInfo

## Implements

- [`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTasksReadyResultInfo()

> **new SerpBingOrganicTasksReadyResultInfo**(`data`?): [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:57384

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:57369

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:57377

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:57380

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:57374

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:57362

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:57364

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:57367

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:57371

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:57393

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:57417

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:57410
