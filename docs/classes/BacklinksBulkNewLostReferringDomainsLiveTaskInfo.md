[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostReferringDomainsLiveTaskInfo

# Class: BacklinksBulkNewLostReferringDomainsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BacklinksBulkNewLostReferringDomainsLiveTaskInfo`**

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveTaskInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#cost)
- [data](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#data)
- [id](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#id)
- [path](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#path)
- [result](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#result)
- [result\_count](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#result_count)
- [status\_code](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#status_code)
- [status\_message](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#status_message)
- [time](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#time)

### Methods

- [init](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#init)
- [toJSON](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#tojson)
- [fromJS](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostReferringDomainsLiveTaskInfo**(`data?`): [`BacklinksBulkNewLostReferringDomainsLiveTaskInfo`](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostReferringDomainsLiveTaskInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md) |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveTaskInfo`](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:141475

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[cost](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#cost)

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

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[data](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#data)

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

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[id](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[path](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[result](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#result)

#### Defined in

main.ts:141471

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[result_count](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#result_count)

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

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[status_code](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#status_code)

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

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[status_message](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md).[time](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveTaskInfo.md#time)

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

main.ts:141479

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

main.ts:141501

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveTaskInfo`](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveTaskInfo`](BacklinksBulkNewLostReferringDomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:141494
