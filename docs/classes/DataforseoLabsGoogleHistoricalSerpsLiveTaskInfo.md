[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:92349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92349)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)[]

array of results
the array includes objects with SERPs for each month within the specified time frame

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#result)

#### Defined in

[main.ts:92345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92345)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md#time)

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

[main.ts:92353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92353)

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

[main.ts:92375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92375)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:92368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92368)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")