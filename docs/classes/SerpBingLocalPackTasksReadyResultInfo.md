[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksReadyResultInfo

# Class: SerpBingLocalPackTasksReadyResultInfo

## Implements

- [`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpBingLocalPackTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpBingLocalPackTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpBingLocalPackTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpBingLocalPackTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpBingLocalPackTasksReadyResultInfo.md#id)
- [se](SerpBingLocalPackTasksReadyResultInfo.md#se)
- [se\_type](SerpBingLocalPackTasksReadyResultInfo.md#se_type)
- [tag](SerpBingLocalPackTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpBingLocalPackTasksReadyResultInfo.md#init)
- [toJSON](SerpBingLocalPackTasksReadyResultInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksReadyResultInfo**(`data?`): [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksReadyResultInfo`](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md) |

#### Returns

[`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Defined in

main.ts:58190

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:58175

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:58183

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:58186

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:58180

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[id](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#id)

#### Defined in

main.ts:58168

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[se](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#se)

#### Defined in

main.ts:58170

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_pack

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[se_type](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:58173

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBingLocalPackTasksReadyResultInfo](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md).[tag](../interfaces/ISerpBingLocalPackTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:58177

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

main.ts:58199

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

main.ts:58223

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)

#### Defined in

main.ts:58216
