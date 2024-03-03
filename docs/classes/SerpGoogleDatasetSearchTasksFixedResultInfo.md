[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksFixedResultInfo

# Class: SerpGoogleDatasetSearchTasksFixedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleDatasetSearchTasksFixedResultInfo.md#id)
- [se](SerpGoogleDatasetSearchTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleDatasetSearchTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTasksFixedResultInfo**(`data?`): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Defined in

main.ts:50515

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:50500

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:50508

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:50511

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:50505

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)

#### Defined in

main.ts:50493

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)

#### Defined in

main.ts:50495

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:50498

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:50502

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:50524

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:50548

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Defined in

main.ts:50541
