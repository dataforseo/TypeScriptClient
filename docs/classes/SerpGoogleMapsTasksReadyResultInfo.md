**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksReadyResultInfo

# Class: SerpGoogleMapsTasksReadyResultInfo

## Implements

- [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksReadyResultInfo(data)

> **new SerpGoogleMapsTasksReadyResultInfo**(`data`?): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Source

main.ts:39929

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:39914

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:39922

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:39925

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:39919

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#id)

#### Source

main.ts:39907

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se)

#### Source

main.ts:39909

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: maps

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:39912

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#tag)

#### Source

main.ts:39916

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:39938

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:39962

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Source

main.ts:39955
