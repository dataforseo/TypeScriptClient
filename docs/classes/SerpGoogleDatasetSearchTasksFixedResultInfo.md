[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksFixedResultInfo

# Class: SerpGoogleDatasetSearchTasksFixedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksFixedResultInfo()

> **new SerpGoogleDatasetSearchTasksFixedResultInfo**(`data`?): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Defined in

main.ts:55236

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:55221

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:55229

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:55232

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:55226

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)

#### Defined in

main.ts:55214

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)

#### Defined in

main.ts:55216

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:55219

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:55223

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:55245

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:55269

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Defined in

main.ts:55262
