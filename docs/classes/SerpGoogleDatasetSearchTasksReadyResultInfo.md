**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksReadyResultInfo

# Class: SerpGoogleDatasetSearchTasksReadyResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksReadyResultInfo(data)

> **new SerpGoogleDatasetSearchTasksReadyResultInfo**(`data`?): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Source

main.ts:54492

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:54477

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:54485

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:54488

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:54482

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#id)

#### Source

main.ts:54470

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se)

#### Source

main.ts:54472

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se_type)

#### Source

main.ts:54475

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#tag)

#### Source

main.ts:54479

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:54501

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:54525

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Source

main.ts:54518
