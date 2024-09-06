[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpNaverOrganicTasksFixedResultInfo

# Class: SerpNaverOrganicTasksFixedResultInfo

## Implements

- [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTasksFixedResultInfo()

> **new SerpNaverOrganicTasksFixedResultInfo**(`data`?): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:71523

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:71508

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:71516

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:71519

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:71513

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:71501

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:71503

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:71506

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:71510

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:71532

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:71556

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:71549
