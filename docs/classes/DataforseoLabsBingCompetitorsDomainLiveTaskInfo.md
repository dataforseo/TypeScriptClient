[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingCompetitorsDomainLiveTaskInfo

# Class: DataforseoLabsBingCompetitorsDomainLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingCompetitorsDomainLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingCompetitorsDomainLiveTaskInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#data)
- [id](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#id)
- [path](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#path)
- [result](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingCompetitorsDomainLiveTaskInfo**(`data?`): [`DataforseoLabsBingCompetitorsDomainLiveTaskInfo`](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingCompetitorsDomainLiveTaskInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveTaskInfo`](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:105657

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#data)

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

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#result)

#### Defined in

main.ts:105653

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveTaskInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveTaskInfo.md#time)

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

main.ts:105661

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

main.ts:105683

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingCompetitorsDomainLiveTaskInfo`](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveTaskInfo`](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:105676
