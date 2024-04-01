[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTasksReadyResultInfo

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

main.ts:38560

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:38545

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:38553

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:38556

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:38550

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:38538

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:38540

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:38543

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleMapsTasksReadyResultInfo](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:38547

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

main.ts:38569

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

main.ts:38593

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

main.ts:38586
