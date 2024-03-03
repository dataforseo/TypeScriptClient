[Documentation](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTasksReadyResultInfo

# Class: SerpNaverOrganicTasksReadyResultInfo

## Implements

- [`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpNaverOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpNaverOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpNaverOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpNaverOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpNaverOrganicTasksReadyResultInfo.md#id)
- [se](SerpNaverOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpNaverOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpNaverOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpNaverOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpNaverOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpNaverOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTasksReadyResultInfo**(`data?`): [`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:67751

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:67736

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:67744

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:67747

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:67741

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:67729

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:67731

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:67734

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpNaverOrganicTasksReadyResultInfo](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:67738

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

main.ts:67760

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

main.ts:67784

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:67777
