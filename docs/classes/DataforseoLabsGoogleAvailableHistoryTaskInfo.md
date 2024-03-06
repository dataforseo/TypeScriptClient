[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAvailableHistoryTaskInfo

# Class: DataforseoLabsGoogleAvailableHistoryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleAvailableHistoryTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleAvailableHistoryTaskInfo`](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#cost)
- [data](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#data)
- [id](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#id)
- [path](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#path)
- [result](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAvailableHistoryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAvailableHistoryTaskInfo**(`data?`): [`DataforseoLabsGoogleAvailableHistoryTaskInfo`](DataforseoLabsGoogleAvailableHistoryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAvailableHistoryTaskInfo`](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleAvailableHistoryTaskInfo`](DataforseoLabsGoogleAvailableHistoryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:78384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78384)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#cost)

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

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#data)

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

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleAvailableHistoryResultInfo`](DataforseoLabsGoogleAvailableHistoryResultInfo.md)[]

array of objects containing results

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#result)

#### Defined in

[main.ts:78380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78380)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryTaskInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleAvailableHistoryTaskInfo.md#time)

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

[main.ts:78388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78388)

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

[main.ts:78410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78410)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAvailableHistoryTaskInfo`](DataforseoLabsGoogleAvailableHistoryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAvailableHistoryTaskInfo`](DataforseoLabsGoogleAvailableHistoryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:78403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78403)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")