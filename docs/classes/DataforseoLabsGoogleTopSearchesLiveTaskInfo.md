[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleTopSearchesLiveTaskInfo

# Class: DataforseoLabsGoogleTopSearchesLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleTopSearchesLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleTopSearchesLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleTopSearchesLiveTaskInfo`](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleTopSearchesLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveTaskInfo`](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:85374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85374)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#result)

#### Defined in

[main.ts:85370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85370)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleTopSearchesLiveTaskInfo.md#time)

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

[main.ts:85378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85378)

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

[main.ts:85400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85400)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveTaskInfo`](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveTaskInfo`](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:85393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85393)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")