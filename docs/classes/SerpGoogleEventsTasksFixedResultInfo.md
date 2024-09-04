[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleEventsTasksFixedResultInfo

# Class: SerpGoogleEventsTasksFixedResultInfo

## Implements

- [`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTasksFixedResultInfo()

> **new SerpGoogleEventsTasksFixedResultInfo**(`data`?): [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Defined in

main.ts:47442

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:47427

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:47435

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:47438

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:47432

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:47420

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:47422

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:47425

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:47429

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:47451

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:47475

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Defined in

main.ts:47468
