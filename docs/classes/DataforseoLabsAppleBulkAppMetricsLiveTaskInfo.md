[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleBulkAppMetricsLiveTaskInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsAppleBulkAppMetricsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#cost)
- [data](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#data)
- [id](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#id)
- [path](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#path)
- [result](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleBulkAppMetricsLiveTaskInfo**(`data?`): [`DataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:110424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110424)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#cost)

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

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#data)

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

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#result)

#### Defined in

[main.ts:110420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110420)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md#time)

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

[main.ts:110428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110428)

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

[main.ts:110450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110450)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:110443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110443)
