[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleDatasetInfoTasksReadyResultInfo

# Class: SerpGoogleDatasetInfoTasksReadyResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTasksReadyResultInfo()

> **new SerpGoogleDatasetInfoTasksReadyResultInfo**(`data`?): [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:55439

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:55424

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:55432

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:55435

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:55429

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:55417

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:55419

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: dataset_info

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:55422

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:55426

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:55448

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:55472

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:55465
