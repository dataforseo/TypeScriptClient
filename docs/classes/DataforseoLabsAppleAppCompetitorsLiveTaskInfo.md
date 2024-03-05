[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppCompetitorsLiveTaskInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#cost)
- [data](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#data)
- [id](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#id)
- [path](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#path)
- [result](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppCompetitorsLiveTaskInfo**(`data?`): [`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:111616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111616)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#cost)

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

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#data)

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

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#result)

#### Defined in

[main.ts:111612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111612)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveTaskInfo.md#time)

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

[main.ts:111620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111620)

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

[main.ts:111642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111642)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:111635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111635)
