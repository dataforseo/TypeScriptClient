[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTasksFixedResultInfo

# Class: SerpGoogleNewsTasksFixedResultInfo

## Implements

- [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleNewsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleNewsTasksFixedResultInfo.md#id)
- [se](SerpGoogleNewsTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleNewsTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleNewsTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleNewsTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleNewsTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTasksFixedResultInfo**(`data?`): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Defined in

[main.ts:42301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42301)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:42286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42286)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:42294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42294)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:42297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42297)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:42291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42291)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:42279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42279)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:42281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42281)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:42284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42284)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleNewsTasksFixedResultInfo](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:42288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42288)

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

[main.ts:42310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42310)

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

[main.ts:42334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42334)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

#### Defined in

[main.ts:42327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42327)
