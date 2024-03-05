[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppCompetitorsLiveTaskInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppCompetitorsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:109484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109484)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#result)

#### Defined in

[main.ts:109480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109480)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md#time)

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

[main.ts:109488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109488)

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

[main.ts:109510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109510)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:109503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109503)
