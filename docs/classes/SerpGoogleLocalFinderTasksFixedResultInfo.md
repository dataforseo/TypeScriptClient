[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTasksFixedResultInfo

# Class: SerpGoogleLocalFinderTasksFixedResultInfo

## Implements

- [`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleLocalFinderTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleLocalFinderTasksFixedResultInfo.md#id)
- [se](SerpGoogleLocalFinderTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleLocalFinderTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleLocalFinderTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleLocalFinderTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTasksFixedResultInfo**(`data?`): [`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Defined in

main.ts:40435

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:40420

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:40428

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:40431

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:40425

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#id)

#### Defined in

main.ts:40413

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#se)

#### Defined in

main.ts:40415

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_finder

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:40418

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResultInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:40422

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

main.ts:40444

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

main.ts:40468

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Defined in

main.ts:40461
