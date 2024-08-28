[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleJobsTasksFixedResultInfo

# Class: SerpGoogleJobsTasksFixedResultInfo

## Implements

- [`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTasksFixedResultInfo()

> **new SerpGoogleJobsTasksFixedResultInfo**(`data`?): [`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Defined in

main.ts:52128

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:52113

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:52121

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:52124

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:52118

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:52106

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:52108

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: jobs

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:52111

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:52115

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:52137

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:52161

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Defined in

main.ts:52154
