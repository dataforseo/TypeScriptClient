[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTasksFixedResultInfo

# Class: SerpGoogleDatasetInfoTasksFixedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTasksFixedResultInfo()

> **new SerpGoogleDatasetInfoTasksFixedResultInfo**(`data`?): [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Defined in

main.ts:57180

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:57165

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:57173

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:57176

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:57170

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#id)

#### Defined in

main.ts:57158

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se)

#### Defined in

main.ts:57160

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:57163

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:57167

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:57189

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:57213

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Defined in

main.ts:57206
