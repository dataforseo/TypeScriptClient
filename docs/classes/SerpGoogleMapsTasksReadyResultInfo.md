[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTasksReadyResultInfo

# Class: SerpGoogleMapsTasksReadyResultInfo

## Implements

- [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleMapsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleMapsTasksReadyResultInfo.md#id)
- [se](SerpGoogleMapsTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleMapsTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleMapsTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleMapsTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleMapsTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleMapsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsTasksReadyResultInfo**(`data?`): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Defined in

[main.ts:37809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37809)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:37794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37794)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:37802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37802)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:37805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37805)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:37799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37799)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:37787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37787)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:37789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37789)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:37792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37792)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:37796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37796)

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

[main.ts:37818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37818)

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

[main.ts:37842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37842)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)

#### Defined in

[main.ts:37835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37835)
