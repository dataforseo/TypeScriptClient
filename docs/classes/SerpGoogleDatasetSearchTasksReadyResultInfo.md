[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksReadyResultInfo

# Class: SerpGoogleDatasetSearchTasksReadyResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleDatasetSearchTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleDatasetSearchTasksReadyResultInfo.md#id)
- [se](SerpGoogleDatasetSearchTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleDatasetSearchTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleDatasetSearchTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleDatasetSearchTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTasksReadyResultInfo**(`data?`): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:50161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50161)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:50146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50146)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:50154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50154)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:50157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50157)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:50151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50151)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:50139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50139)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:50141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50141)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:50144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50144)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResultInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleDatasetSearchTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:50148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50148)

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

[main.ts:50170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50170)

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

[main.ts:50194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50194)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:50187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50187)
