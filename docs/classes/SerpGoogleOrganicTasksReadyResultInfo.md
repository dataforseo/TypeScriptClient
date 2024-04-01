[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTasksReadyResultInfo

# Class: SerpGoogleOrganicTasksReadyResultInfo

## Implements

- [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleOrganicTasksReadyResultInfo.md#id)
- [se](SerpGoogleOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTasksReadyResultInfo**(`data?`): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:25268

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:25253

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:25261

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:25264

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:25258

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:25246

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:25248

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:25251

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:25255

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

main.ts:25277

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

main.ts:25301

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:25294
