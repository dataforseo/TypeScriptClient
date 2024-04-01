[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTasksFixedResultInfo

# Class: SerpBaiduOrganicTasksFixedResultInfo

## Implements

- [`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpBaiduOrganicTasksFixedResultInfo.md#id)
- [se](SerpBaiduOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpBaiduOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpBaiduOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpBaiduOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpBaiduOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTasksFixedResultInfo**(`data?`): [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:68782

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:68767

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:68775

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:68778

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:68772

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:68760

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:68762

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:68765

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBaiduOrganicTasksFixedResultInfo](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:68769

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

main.ts:68791

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

main.ts:68815

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:68808
