[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAvailableFiltersTaskInfo

# Class: DataforseoLabsAvailableFiltersTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsAvailableFiltersTaskInfo`**

## Implements

- [`IDataforseoLabsAvailableFiltersTaskInfo`](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAvailableFiltersTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAvailableFiltersTaskInfo.md#cost)
- [data](DataforseoLabsAvailableFiltersTaskInfo.md#data)
- [id](DataforseoLabsAvailableFiltersTaskInfo.md#id)
- [path](DataforseoLabsAvailableFiltersTaskInfo.md#path)
- [result](DataforseoLabsAvailableFiltersTaskInfo.md#result)
- [result\_count](DataforseoLabsAvailableFiltersTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAvailableFiltersTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAvailableFiltersTaskInfo.md#status_message)
- [time](DataforseoLabsAvailableFiltersTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAvailableFiltersTaskInfo.md#init)
- [toJSON](DataforseoLabsAvailableFiltersTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAvailableFiltersTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAvailableFiltersTaskInfo**(`data?`): [`DataforseoLabsAvailableFiltersTaskInfo`](DataforseoLabsAvailableFiltersTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAvailableFiltersTaskInfo`](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md) |

#### Returns

[`DataforseoLabsAvailableFiltersTaskInfo`](DataforseoLabsAvailableFiltersTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:77739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77739)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[cost](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#cost)

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

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[data](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#data)

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

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[id](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[path](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsAvailableFiltersResultInfo`](DataforseoLabsAvailableFiltersResultInfo.md)[]

#### Implementation of

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[result](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#result)

#### Defined in

[main.ts:77735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77735)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#result_count)

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

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#status_code)

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

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAvailableFiltersTaskInfo](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md).[time](../interfaces/IDataforseoLabsAvailableFiltersTaskInfo.md#time)

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

[main.ts:77743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77743)

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

[main.ts:77765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77765)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAvailableFiltersTaskInfo`](DataforseoLabsAvailableFiltersTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAvailableFiltersTaskInfo`](DataforseoLabsAvailableFiltersTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:77758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77758)
