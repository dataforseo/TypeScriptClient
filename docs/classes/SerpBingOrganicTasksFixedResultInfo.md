[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingOrganicTasksFixedResultInfo

# Class: SerpBingOrganicTasksFixedResultInfo

## Implements

- [`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTasksFixedResultInfo()

> **new SerpBingOrganicTasksFixedResultInfo**(`data`?): [`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:57563

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:57548

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:57556

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:57559

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:57553

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:57541

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:57543

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:57546

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:57550

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:57572

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:57596

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:57589
