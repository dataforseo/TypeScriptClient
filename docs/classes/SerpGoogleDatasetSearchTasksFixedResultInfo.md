**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksFixedResultInfo

# Class: SerpGoogleDatasetSearchTasksFixedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksFixedResultInfo(data)

> **new SerpGoogleDatasetSearchTasksFixedResultInfo**(`data`?): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Source

main.ts:54147

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:54132

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:54140

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:54143

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:54137

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)

#### Source

main.ts:54125

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)

#### Source

main.ts:54127

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)

#### Source

main.ts:54130

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

#### Source

main.ts:54134

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:54156

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:54180

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Source

main.ts:54173
