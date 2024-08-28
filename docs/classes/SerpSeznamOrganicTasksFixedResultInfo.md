[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpSeznamOrganicTasksFixedResultInfo

# Class: SerpSeznamOrganicTasksFixedResultInfo

## Implements

- [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksFixedResultInfo()

> **new SerpSeznamOrganicTasksFixedResultInfo**(`data`?): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:74996

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:74981

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:74989

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:74992

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:74986

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:74974

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:74976

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:74979

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:74983

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:75005

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:75029

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:75022
