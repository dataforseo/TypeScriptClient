[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGooglePageIntersectionLiveTaskInfo

# Class: DataforseoLabsGooglePageIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGooglePageIntersectionLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#cost)
- [data](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#data)
- [id](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#id)
- [path](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#path)
- [result](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGooglePageIntersectionLiveTaskInfo**(`data?`): [`DataforseoLabsGooglePageIntersectionLiveTaskInfo`](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGooglePageIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveTaskInfo`](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:97342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97342)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#cost)

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

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#data)

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

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#result)

#### Defined in

[main.ts:97338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97338)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGooglePageIntersectionLiveTaskInfo.md#time)

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

[main.ts:97346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97346)

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

[main.ts:97368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97368)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveTaskInfo`](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveTaskInfo`](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:97361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97361)
