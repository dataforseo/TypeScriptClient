[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingSubdomainsLiveTaskInfo

# Class: DataforseoLabsBingSubdomainsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsBingSubdomainsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingSubdomainsLiveTaskInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingSubdomainsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingSubdomainsLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingSubdomainsLiveTaskInfo.md#data)
- [id](DataforseoLabsBingSubdomainsLiveTaskInfo.md#id)
- [path](DataforseoLabsBingSubdomainsLiveTaskInfo.md#path)
- [result](DataforseoLabsBingSubdomainsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingSubdomainsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingSubdomainsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingSubdomainsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingSubdomainsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingSubdomainsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingSubdomainsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingSubdomainsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingSubdomainsLiveTaskInfo**(`data?`): [`DataforseoLabsBingSubdomainsLiveTaskInfo`](DataforseoLabsBingSubdomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingSubdomainsLiveTaskInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingSubdomainsLiveTaskInfo`](DataforseoLabsBingSubdomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:107680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107680)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#data)

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

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#result)

#### Defined in

[main.ts:107676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107676)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingSubdomainsLiveTaskInfo.md#time)

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

[main.ts:107684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107684)

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

[main.ts:107706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107706)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingSubdomainsLiveTaskInfo`](DataforseoLabsBingSubdomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingSubdomainsLiveTaskInfo`](DataforseoLabsBingSubdomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:107699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107699)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")