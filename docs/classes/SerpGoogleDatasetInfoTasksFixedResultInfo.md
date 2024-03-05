[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTasksFixedResultInfo

# Class: SerpGoogleDatasetInfoTasksFixedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleDatasetInfoTasksFixedResultInfo.md#id)
- [se](SerpGoogleDatasetInfoTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleDatasetInfoTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTasksFixedResultInfo**(`data?`): [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Defined in

[main.ts:52317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52317)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:52302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52302)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:52310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52310)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:52313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52313)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:52307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52307)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:52295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52295)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:52297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52297)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:52300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52300)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedResultInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:52304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52304)

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

[main.ts:52326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52326)

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

[main.ts:52350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52350)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Defined in

[main.ts:52343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52343)
