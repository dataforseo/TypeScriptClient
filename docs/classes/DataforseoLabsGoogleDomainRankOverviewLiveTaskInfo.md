[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:93225

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#result)

#### Defined in

main.ts:93221

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md#time)

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

main.ts:93229

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

main.ts:93251

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:93244
