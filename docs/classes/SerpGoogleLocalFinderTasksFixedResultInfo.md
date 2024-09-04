[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleLocalFinderTasksFixedResultInfo

# Class: SerpGoogleLocalFinderTasksFixedResultInfo

## Implements

- [`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTasksFixedResultInfo()

> **new SerpGoogleLocalFinderTasksFixedResultInfo**(`data`?): [`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Defined in

main.ts:41650

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:41635

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:41643

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:41646

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:41640

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#id)

#### Defined in

main.ts:41628

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#se)

#### Defined in

main.ts:41630

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: local_finder

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:41633

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:41637

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:41659

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:41683

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Defined in

main.ts:41676
