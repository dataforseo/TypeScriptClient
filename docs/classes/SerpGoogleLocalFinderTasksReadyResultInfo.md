[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTasksReadyResultInfo

# Class: SerpGoogleLocalFinderTasksReadyResultInfo

## Implements

- [`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleLocalFinderTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleLocalFinderTasksReadyResultInfo.md#id)
- [se](SerpGoogleLocalFinderTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleLocalFinderTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleLocalFinderTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleLocalFinderTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTasksReadyResultInfo**(`data?`): [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Defined in

[main.ts:40081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40081)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:40066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40066)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:40074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40074)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:40077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40077)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:40071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40071)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:40059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40059)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:40061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40061)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_finder

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:40064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40064)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyResultInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:40068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40068)

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

[main.ts:40090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40090)

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

[main.ts:40114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40114)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Defined in

[main.ts:40107](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40107)
