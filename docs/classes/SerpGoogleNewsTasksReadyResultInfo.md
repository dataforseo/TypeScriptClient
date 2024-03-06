[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTasksReadyResultInfo

# Class: SerpGoogleNewsTasksReadyResultInfo

## Implements

- [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleNewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleNewsTasksReadyResultInfo.md#id)
- [se](SerpGoogleNewsTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleNewsTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleNewsTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleNewsTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleNewsTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTasksReadyResultInfo**(`data?`): [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:42089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42089)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:42074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42074)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:42082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42082)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:42085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42085)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:42079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42079)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:42067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42067)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:42069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42069)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:42072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42072)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:42076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42076)

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

[main.ts:42098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42098)

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

[main.ts:42122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42122)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:42115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42115)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")