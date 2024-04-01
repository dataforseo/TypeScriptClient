[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:90985

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#result)

#### Defined in

main.ts:90981

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md#time)

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

main.ts:90989

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

main.ts:91011

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:91004
