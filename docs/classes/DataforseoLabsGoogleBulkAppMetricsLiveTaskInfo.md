[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:108120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108120)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#result)

#### Defined in

[main.ts:108116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108116)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md#time)

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

[main.ts:108124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108124)

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

[main.ts:108146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108146)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:108139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108139)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")