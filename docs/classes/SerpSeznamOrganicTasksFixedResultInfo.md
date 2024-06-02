**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTasksFixedResultInfo

# Class: SerpSeznamOrganicTasksFixedResultInfo

## Implements

- [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksFixedResultInfo(data)

> **new SerpSeznamOrganicTasksFixedResultInfo**(`data`?): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Source

main.ts:73451

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:73436

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:73444

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:73447

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:73441

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#id)

#### Source

main.ts:73429

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se)

#### Source

main.ts:73431

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se_type)

#### Source

main.ts:73434

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#tag)

#### Source

main.ts:73438

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:73460

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:73484

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Source

main.ts:73477
