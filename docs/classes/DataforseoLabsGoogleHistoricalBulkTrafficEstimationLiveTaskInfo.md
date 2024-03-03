[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:98654

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:22744

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:22750

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#result)

#### Defined in

main.ts:98650

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:22746

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:22737

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:22742

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

main.ts:98658

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

main.ts:98680

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:98673
