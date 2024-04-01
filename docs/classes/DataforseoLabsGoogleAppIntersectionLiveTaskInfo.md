[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppIntersectionLiveTaskInfo

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

main.ts:112437

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#result)

#### Defined in

main.ts:112433

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveTaskInfo.md#time)

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

main.ts:112441

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

main.ts:112463

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

main.ts:112456
