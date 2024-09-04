[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpTasksReadyResultInfo

# Class: SerpTasksReadyResultInfo

## Implements

- [`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpTasksReadyResultInfo()

> **new SerpTasksReadyResultInfo**(`data`?): [`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md)

#### Returns

[`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Defined in

main.ts:26600

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:26585

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:26593

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:26596

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:26590

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`id`](../interfaces/ISerpTasksReadyResultInfo.md#id)

#### Defined in

main.ts:26578

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`se`](../interfaces/ISerpTasksReadyResultInfo.md#se)

#### Defined in

main.ts:26580

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:26583

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:26587

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:26609

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:26633

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Defined in

main.ts:26626
