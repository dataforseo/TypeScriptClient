[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocalPackTasksFixedResultInfo

# Class: SerpBingLocalPackTasksFixedResultInfo

## Implements

- [`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTasksFixedResultInfo()

> **new SerpBingLocalPackTasksFixedResultInfo**(`data`?): [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md)

#### Returns

[`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Defined in

main.ts:60892

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:60877

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:60885

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:60888

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:60882

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#id)

#### Defined in

main.ts:60870

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#se)

#### Defined in

main.ts:60872

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: local_pack

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:60875

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:60879

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:60901

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:60925

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Defined in

main.ts:60918
