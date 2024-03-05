[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetAdvancedTaskInfo

# Class: SerpSeznamOrganicTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpSeznamOrganicTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#data)
- [id](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#id)
- [path](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#path)
- [result](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetAdvancedTaskInfo**(`data?`): [`SerpSeznamOrganicTaskGetAdvancedTaskInfo`](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedTaskInfo`](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:70540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70540)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#data)

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

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:70536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70536)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpSeznamOrganicTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:70544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70544)

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

[main.ts:70566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70566)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedTaskInfo`](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedTaskInfo`](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:70559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70559)
