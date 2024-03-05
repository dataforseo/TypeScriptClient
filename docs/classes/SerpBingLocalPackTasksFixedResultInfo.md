[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksFixedResultInfo

# Class: SerpBingLocalPackTasksFixedResultInfo

## Implements

- [`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpBingLocalPackTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpBingLocalPackTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpBingLocalPackTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpBingLocalPackTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpBingLocalPackTasksFixedResultInfo.md#id)
- [se](SerpBingLocalPackTasksFixedResultInfo.md#se)
- [se\_type](SerpBingLocalPackTasksFixedResultInfo.md#se_type)
- [tag](SerpBingLocalPackTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpBingLocalPackTasksFixedResultInfo.md#init)
- [toJSON](SerpBingLocalPackTasksFixedResultInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksFixedResultInfo**(`data?`): [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md) |

#### Returns

[`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Defined in

[main.ts:56027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56027)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:56012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56012)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:56020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56020)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:56023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56023)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:56017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56017)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[id](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:56005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56005)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[se](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:56007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56007)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_pack

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[se_type](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:56010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56010)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBingLocalPackTasksFixedResultInfo](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[tag](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:56014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56014)

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

[main.ts:56036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56036)

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

[main.ts:56060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56060)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

#### Defined in

[main.ts:56053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56053)
