[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTasksFixedResultInfo

# Class: SerpGoogleJobsTasksFixedResultInfo

## Implements

- [`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleJobsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleJobsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleJobsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleJobsTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleJobsTasksFixedResultInfo.md#id)
- [se](SerpGoogleJobsTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleJobsTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleJobsTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleJobsTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleJobsTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleJobsTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTasksFixedResultInfo**(`data?`): [`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Defined in

main.ts:49670

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:49655

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:49663

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:49666

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:49660

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:49648

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:49650

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: jobs

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:49653

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleJobsTasksFixedResultInfo](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:49657

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

main.ts:49679

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

main.ts:49703

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)

#### Defined in

main.ts:49696
