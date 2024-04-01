[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesAvailableFiltersTaskInfo

# Class: DomainAnalyticsTechnologiesAvailableFiltersTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesAvailableFiltersTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:74042

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesAvailableFiltersResultInfo`](DomainAnalyticsTechnologiesAvailableFiltersResultInfo.md)[]

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#result)

#### Defined in

main.ts:74038

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md#time)

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

main.ts:74046

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

main.ts:74068

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:74061
