[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:86054

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#result)

#### Defined in

main.ts:86050

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md#time)

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

main.ts:86058

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

main.ts:86080

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:86073
