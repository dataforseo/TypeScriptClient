[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#cost)
- [data](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#data)
- [id](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#id)
- [path](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#path)
- [result](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo**(`data?`): [`DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:98960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98960)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#cost)

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

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#data)

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

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#result)

#### Defined in

[main.ts:98956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98956)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md#time)

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

[main.ts:98964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98964)

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

[main.ts:98986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98986)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:98979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98979)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")