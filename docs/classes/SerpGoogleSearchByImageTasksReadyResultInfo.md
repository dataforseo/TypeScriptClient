[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTasksReadyResultInfo

# Class: SerpGoogleSearchByImageTasksReadyResultInfo

## Implements

- [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleSearchByImageTasksReadyResultInfo.md#id)
- [se](SerpGoogleSearchByImageTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleSearchByImageTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTasksReadyResultInfo**(`data?`): [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Defined in

[main.ts:47615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47615)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:47600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47600)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:47608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47608)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:47611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47611)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:47605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47605)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:47593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47593)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:47595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47595)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:47598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47598)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResultInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:47602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47602)

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

[main.ts:47624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47624)

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

[main.ts:47648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47648)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Defined in

[main.ts:47641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47641)
