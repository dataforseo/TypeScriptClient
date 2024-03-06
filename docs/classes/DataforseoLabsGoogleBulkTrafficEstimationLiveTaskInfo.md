[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:97862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97862)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#result)

#### Defined in

[main.ts:97858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97858)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md#time)

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

[main.ts:97866](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97866)

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

[main.ts:97888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97888)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:97881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97881)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")