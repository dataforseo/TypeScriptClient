[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#data)
- [id](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#id)
- [path](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#path)
- [result](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo**(`data?`): [`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:105093

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:23121

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:23127

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#result)

#### Defined in

main.ts:105089

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:23123

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:23114

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:23119

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

main.ts:105097

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

main.ts:105119

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:105112
