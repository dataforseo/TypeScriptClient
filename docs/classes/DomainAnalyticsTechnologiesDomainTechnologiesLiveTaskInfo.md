[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo

# Class: DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:75448

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#result)

#### Defined in

main.ts:75444

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md#time)

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

main.ts:75452

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

main.ts:75474

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:75467
