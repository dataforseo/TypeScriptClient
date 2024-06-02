**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTasksReadyResultInfo

# Class: SerpSeznamOrganicTasksReadyResultInfo

## Implements

- [`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksReadyResultInfo(data)

> **new SerpSeznamOrganicTasksReadyResultInfo**(`data`?): [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Source

main.ts:73239

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:73224

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:73232

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:73235

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:73229

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#id)

#### Source

main.ts:73217

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#se)

#### Source

main.ts:73219

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#se_type)

#### Source

main.ts:73222

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#tag)

#### Source

main.ts:73226

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:73248

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:73272

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Source

main.ts:73265
