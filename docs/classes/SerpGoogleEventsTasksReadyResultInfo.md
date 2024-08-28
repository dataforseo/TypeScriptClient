[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleEventsTasksReadyResultInfo

# Class: SerpGoogleEventsTasksReadyResultInfo

## Implements

- [`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTasksReadyResultInfo()

> **new SerpGoogleEventsTasksReadyResultInfo**(`data`?): [`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Defined in

main.ts:47230

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:47215

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:47223

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:47226

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:47220

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:47208

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:47210

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: events

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:47213

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:47217

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:47239

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:47263

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Defined in

main.ts:47256
