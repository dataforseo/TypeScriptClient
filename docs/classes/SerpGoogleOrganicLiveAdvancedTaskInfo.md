[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveAdvancedTaskInfo

# Class: SerpGoogleOrganicLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleOrganicLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleOrganicLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleOrganicLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleOrganicLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleOrganicLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleOrganicLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleOrganicLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:36990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36990)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:36986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36986)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicLiveAdvancedTaskInfo.md#time)

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

[main.ts:36994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36994)

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

[main.ts:37016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37016)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:37009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37009)
