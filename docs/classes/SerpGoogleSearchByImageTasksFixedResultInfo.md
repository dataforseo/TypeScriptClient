[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksFixedResultInfo

# Class: SerpGoogleSearchByImageTasksFixedResultInfo

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksFixedResultInfo()

> **new SerpGoogleSearchByImageTasksFixedResultInfo**(`data`?): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Defined in

main.ts:51036

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:51021

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:51029

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:51032

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:51026

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#id)

#### Defined in

main.ts:51014

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se)

#### Defined in

main.ts:51016

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:51019

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:51023

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:51045

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:51069

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Defined in

main.ts:51062
