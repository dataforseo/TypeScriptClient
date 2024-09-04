[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleNewsTasksFixedResultInfo

# Class: SerpGoogleNewsTasksFixedResultInfo

## Implements

- [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksFixedResultInfo()

> **new SerpGoogleNewsTasksFixedResultInfo**(`data`?): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Defined in

main.ts:43658

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:43643

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:43651

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:43654

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:43648

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:43636

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:43638

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:43641

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:43645

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:43667

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:43691

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Defined in

main.ts:43684
