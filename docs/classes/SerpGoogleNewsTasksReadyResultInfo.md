[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTasksReadyResultInfo

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

main.ts:42840

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:42825

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:42833

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:42836

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:42830

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:42818

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:42820

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:42823

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleNewsTasksReadyResultInfo](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:42827

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

main.ts:42849

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

main.ts:42873

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

main.ts:42866
