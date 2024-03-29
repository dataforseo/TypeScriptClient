[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostBacklinksLiveTaskInfo

# Class: BacklinksBulkNewLostBacklinksLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BacklinksBulkNewLostBacklinksLiveTaskInfo`**

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveTaskInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#cost)
- [data](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#data)
- [id](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#id)
- [path](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#path)
- [result](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#result)
- [result\_count](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#result_count)
- [status\_code](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#status_code)
- [status\_message](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#status_message)
- [time](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#time)

### Methods

- [init](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#init)
- [toJSON](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#tojson)
- [fromJS](BacklinksBulkNewLostBacklinksLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostBacklinksLiveTaskInfo**(`data?`): [`BacklinksBulkNewLostBacklinksLiveTaskInfo`](BacklinksBulkNewLostBacklinksLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostBacklinksLiveTaskInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md) |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveTaskInfo`](BacklinksBulkNewLostBacklinksLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:140945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140945)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[cost](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#cost)

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

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[data](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#data)

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

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[id](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[path](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[result](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#result)

#### Defined in

[main.ts:140941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140941)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[result_count](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#result_count)

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

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[status_code](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#status_code)

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

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[status_message](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveTaskInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md).[time](../interfaces/IBacklinksBulkNewLostBacklinksLiveTaskInfo.md#time)

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

[main.ts:140949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140949)

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

[main.ts:140971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140971)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveTaskInfo`](BacklinksBulkNewLostBacklinksLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveTaskInfo`](BacklinksBulkNewLostBacklinksLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:140964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140964)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")