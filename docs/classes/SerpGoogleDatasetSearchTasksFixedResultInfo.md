[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksFixedResultInfo

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

[main.ts:50373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50373)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:50358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50358)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:50366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50366)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:50369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50369)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:50363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50363)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:50351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50351)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:50353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50353)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:50356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50356)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:50360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50360)

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

[main.ts:50382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50382)

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

[main.ts:50406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50406)

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

[main.ts:50399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50399)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")