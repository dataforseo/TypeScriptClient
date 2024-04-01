[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainRankOverviewLiveTaskInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#data)
- [id](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#id)
- [path](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#path)
- [result](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainRankOverviewLiveTaskInfo**(`data?`): [`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainRankOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:106577

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#data)

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

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#result)

#### Defined in

main.ts:106573

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveTaskInfo.md#time)

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

main.ts:106581

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

main.ts:106603

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:106596
