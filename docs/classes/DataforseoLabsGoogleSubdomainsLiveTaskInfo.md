[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSubdomainsLiveTaskInfo

# Class: DataforseoLabsGoogleSubdomainsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleSubdomainsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSubdomainsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleSubdomainsLiveTaskInfo`](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSubdomainsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveTaskInfo`](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:89792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89792)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#result)

#### Defined in

[main.ts:89788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89788)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleSubdomainsLiveTaskInfo.md#time)

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

[main.ts:89796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89796)

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

[main.ts:89818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89818)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveTaskInfo`](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveTaskInfo`](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:89811](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89811)
