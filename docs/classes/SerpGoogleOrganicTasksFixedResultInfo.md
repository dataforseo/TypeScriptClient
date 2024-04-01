[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTasksFixedResultInfo

# Class: SerpGoogleOrganicTasksFixedResultInfo

## Implements

- [`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleOrganicTasksFixedResultInfo.md#id)
- [se](SerpGoogleOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTasksFixedResultInfo**(`data?`): [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:25480

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:25465

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:25473

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:25476

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:25470

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:25458

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:25460

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:25463

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleOrganicTasksFixedResultInfo](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:25467

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

main.ts:25489

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

main.ts:25513

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:25506
