[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppIntersectionLiveTaskInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppIntersectionLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:110060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110060)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#result)

#### Defined in

[main.ts:110056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110056)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#time)

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

[main.ts:110064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110064)

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

[main.ts:110086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110086)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:110079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110079)
