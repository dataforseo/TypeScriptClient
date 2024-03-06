[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTasksFixedResultInfo

# Class: SerpYahooOrganicTasksFixedResultInfo

## Implements

- [`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpYahooOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpYahooOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYahooOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYahooOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpYahooOrganicTasksFixedResultInfo.md#id)
- [se](SerpYahooOrganicTasksFixedResultInfo.md#se)
- [se\_type](SerpYahooOrganicTasksFixedResultInfo.md#se_type)
- [tag](SerpYahooOrganicTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpYahooOrganicTasksFixedResultInfo.md#init)
- [toJSON](SerpYahooOrganicTasksFixedResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTasksFixedResultInfo**(`data?`): [`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md) |

#### Returns

[`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Defined in

[main.ts:63535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63535)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:63520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63520)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:63528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63528)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:63531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63531)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:63525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63525)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[id](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:63513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63513)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[se](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:63515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63515)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[se_type](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:63518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63518)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYahooOrganicTasksFixedResultInfo](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[tag](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:63522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63522)

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

[main.ts:63544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63544)

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

[main.ts:63568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63568)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Defined in

[main.ts:63561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63561)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")