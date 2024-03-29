[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTasksReadyResultInfo

# Class: SerpGoogleDatasetInfoTasksReadyResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleDatasetInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleDatasetInfoTasksReadyResultInfo.md#id)
- [se](SerpGoogleDatasetInfoTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleDatasetInfoTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleDatasetInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleDatasetInfoTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTasksReadyResultInfo**(`data?`): [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:52105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52105)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:52090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52090)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:52098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52098)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:52101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52101)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:52095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52095)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:52083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52083)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:52085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52085)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:52088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52088)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleDatasetInfoTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:52092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52092)

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

[main.ts:52114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52114)

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

[main.ts:52138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52138)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:52131](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52131)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")