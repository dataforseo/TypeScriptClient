[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksReadyResultInfo

# Class: SerpGoogleSearchByImageTasksReadyResultInfo

## Implements

- [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksReadyResultInfo()

> **new SerpGoogleSearchByImageTasksReadyResultInfo**(`data`?): [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Defined in

main.ts:50824

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:50809

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:50817

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:50820

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:50814

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#id)

#### Defined in

main.ts:50802

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se)

#### Defined in

main.ts:50804

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:50807

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:50811

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:50833

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:50857

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Defined in

main.ts:50850
