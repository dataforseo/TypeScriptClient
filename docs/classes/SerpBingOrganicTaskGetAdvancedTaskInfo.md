[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetAdvancedTaskInfo

# Class: SerpBingOrganicTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpBingOrganicTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpBingOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpBingOrganicTaskGetAdvancedTaskInfo.md#data)
- [id](SerpBingOrganicTaskGetAdvancedTaskInfo.md#id)
- [path](SerpBingOrganicTaskGetAdvancedTaskInfo.md#path)
- [result](SerpBingOrganicTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpBingOrganicTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpBingOrganicTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpBingOrganicTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpBingOrganicTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetAdvancedTaskInfo**(`data?`): [`SerpBingOrganicTaskGetAdvancedTaskInfo`](SerpBingOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetAdvancedTaskInfo`](SerpBingOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:54626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54626)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:54622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54622)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpBingOrganicTaskGetAdvancedTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:54630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54630)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:54652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54652)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetAdvancedTaskInfo`](SerpBingOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetAdvancedTaskInfo`](SerpBingOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:54645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54645)
