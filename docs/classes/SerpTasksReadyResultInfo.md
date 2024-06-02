**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpTasksReadyResultInfo

# Class: SerpTasksReadyResultInfo

## Implements

- [`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpTasksReadyResultInfo(data)

> **new SerpTasksReadyResultInfo**(`data`?): [`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md)

#### Returns

[`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Source

main.ts:25511

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:25496

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:25504

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:25507

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:25501

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`id`](../interfaces/ISerpTasksReadyResultInfo.md#id)

#### Source

main.ts:25489

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`se`](../interfaces/ISerpTasksReadyResultInfo.md#se)

#### Source

main.ts:25491

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpTasksReadyResultInfo.md#se_type)

#### Source

main.ts:25494

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpTasksReadyResultInfo.md#tag)

#### Source

main.ts:25498

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:25520

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:25544

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpTasksReadyResultInfo`](SerpTasksReadyResultInfo.md)

#### Source

main.ts:25537
