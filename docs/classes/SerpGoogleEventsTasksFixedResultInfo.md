[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsTasksFixedResultInfo

# Class: SerpGoogleEventsTasksFixedResultInfo

## Implements

- [`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTasksFixedResultInfo()

> **new SerpGoogleEventsTasksFixedResultInfo**(`data`?): [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Defined in

main.ts:48558

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:48543

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:48551

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:48554

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:48548

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:48536

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:48538

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:48541

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:48545

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:48567

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:48591

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Defined in

main.ts:48584
