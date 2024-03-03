[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTasksFixedResultInfo

# Class: SerpSeznamOrganicTasksFixedResultInfo

## Implements

- [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpSeznamOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpSeznamOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpSeznamOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpSeznamOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpSeznamOrganicTasksFixedResultInfo.md#id)
- [se](SerpSeznamOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpSeznamOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpSeznamOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpSeznamOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpSeznamOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTasksFixedResultInfo**(`data?`): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:70073

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:70058

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:70066

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:70069

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:70063

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:70051

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:70053

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:70056

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpSeznamOrganicTasksFixedResultInfo](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:70060

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

main.ts:70082

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

main.ts:70106

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:70099
