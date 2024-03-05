[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTasksFixedResultInfo

# Class: SerpBingOrganicTasksFixedResultInfo

## Implements

- [`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpBingOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpBingOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpBingOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpBingOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpBingOrganicTasksFixedResultInfo.md#id)
- [se](SerpBingOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpBingOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpBingOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpBingOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpBingOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpBingOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTasksFixedResultInfo**(`data?`): [`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Defined in

[main.ts:54021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54021)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:54006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54006)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:54014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54014)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:54017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54017)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:54011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54011)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:53999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53999)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:54001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54001)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:54004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54004)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBingOrganicTasksFixedResultInfo](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:54008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54008)

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

[main.ts:54030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54030)

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

[main.ts:54054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54054)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)

#### Defined in

[main.ts:54047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54047)
