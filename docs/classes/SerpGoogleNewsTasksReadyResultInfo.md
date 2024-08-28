[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleNewsTasksReadyResultInfo

# Class: SerpGoogleNewsTasksReadyResultInfo

## Implements

- [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksReadyResultInfo()

> **new SerpGoogleNewsTasksReadyResultInfo**(`data`?): [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Defined in

main.ts:45298

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:45283

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:45291

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:45294

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:45288

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:45276

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:45278

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: news

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:45281

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:45285

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:45307

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:45331

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Defined in

main.ts:45324
