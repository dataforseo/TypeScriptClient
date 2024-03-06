[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkSpamScoreLiveTaskInfo

# Class: BacklinksBulkSpamScoreLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BacklinksBulkSpamScoreLiveTaskInfo`**

## Implements

- [`IBacklinksBulkSpamScoreLiveTaskInfo`](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkSpamScoreLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksBulkSpamScoreLiveTaskInfo.md#cost)
- [data](BacklinksBulkSpamScoreLiveTaskInfo.md#data)
- [id](BacklinksBulkSpamScoreLiveTaskInfo.md#id)
- [path](BacklinksBulkSpamScoreLiveTaskInfo.md#path)
- [result](BacklinksBulkSpamScoreLiveTaskInfo.md#result)
- [result\_count](BacklinksBulkSpamScoreLiveTaskInfo.md#result_count)
- [status\_code](BacklinksBulkSpamScoreLiveTaskInfo.md#status_code)
- [status\_message](BacklinksBulkSpamScoreLiveTaskInfo.md#status_message)
- [time](BacklinksBulkSpamScoreLiveTaskInfo.md#time)

### Methods

- [init](BacklinksBulkSpamScoreLiveTaskInfo.md#init)
- [toJSON](BacklinksBulkSpamScoreLiveTaskInfo.md#tojson)
- [fromJS](BacklinksBulkSpamScoreLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkSpamScoreLiveTaskInfo**(`data?`): [`BacklinksBulkSpamScoreLiveTaskInfo`](BacklinksBulkSpamScoreLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkSpamScoreLiveTaskInfo`](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md) |

#### Returns

[`BacklinksBulkSpamScoreLiveTaskInfo`](BacklinksBulkSpamScoreLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:140213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140213)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[cost](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#cost)

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

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[data](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#data)

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

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[id](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[path](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[result](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#result)

#### Defined in

[main.ts:140209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140209)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[result_count](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#result_count)

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

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[status_code](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#status_code)

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

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[status_message](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksBulkSpamScoreLiveTaskInfo](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md).[time](../interfaces/IBacklinksBulkSpamScoreLiveTaskInfo.md#time)

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

[main.ts:140217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140217)

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

[main.ts:140239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140239)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveTaskInfo`](BacklinksBulkSpamScoreLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkSpamScoreLiveTaskInfo`](BacklinksBulkSpamScoreLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:140232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140232)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")