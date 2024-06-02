**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksReadyResultInfo

# Class: SerpGoogleNewsTasksReadyResultInfo

## Implements

- [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksReadyResultInfo(data)

> **new SerpGoogleNewsTasksReadyResultInfo**(`data`?): [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Source

main.ts:43897

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:43882

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:43890

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:43893

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:43887

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#id)

#### Source

main.ts:43875

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se)

#### Source

main.ts:43877

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: news

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:43880

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#tag)

#### Source

main.ts:43884

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:43906

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:43930

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Source

main.ts:43923
