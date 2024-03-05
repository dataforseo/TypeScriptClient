[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTasksFixedResultInfo

# Class: SerpNaverOrganicTasksFixedResultInfo

## Implements

- [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpNaverOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpNaverOrganicTasksFixedResultInfo.md#id)
- [se](SerpNaverOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpNaverOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpNaverOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpNaverOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpNaverOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpNaverOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTasksFixedResultInfo**(`data?`): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Defined in

[main.ts:67819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67819)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:67804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67804)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:67812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67812)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:67815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67815)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:67809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67809)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:67797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67797)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:67799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67799)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:67802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67802)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpNaverOrganicTasksFixedResultInfo](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:67806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67806)

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

[main.ts:67828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67828)

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

[main.ts:67852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67852)

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Defined in

[main.ts:67845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67845)
