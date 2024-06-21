**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTasksFixedResultInfo

# Class: SerpGoogleDatasetInfoTasksFixedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTasksFixedResultInfo(data)

> **new SerpGoogleDatasetInfoTasksFixedResultInfo**(`data`?): [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Source

main.ts:56091

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:56076

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:56084

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:56087

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:56081

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#id)

#### Source

main.ts:56069

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se)

#### Source

main.ts:56071

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)

#### Source

main.ts:56074

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

#### Source

main.ts:56078

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:56100

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:56124

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Source

main.ts:56117
