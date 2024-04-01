[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTasksFixedResultInfo

# Class: SerpGoogleMapsTasksFixedResultInfo

## Implements

- [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleMapsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleMapsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleMapsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleMapsTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleMapsTasksFixedResultInfo.md#id)
- [se](SerpGoogleMapsTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleMapsTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleMapsTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleMapsTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleMapsTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleMapsTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsTasksFixedResultInfo**(`data?`): [`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Defined in

main.ts:38772

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:38757

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:38765

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:38768

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:38762

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:38750

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:38752

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:38755

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleMapsTasksFixedResultInfo](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:38759

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

main.ts:38781

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

main.ts:38805

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Defined in

main.ts:38798
