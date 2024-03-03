[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainIntersectionLiveTaskInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainIntersectionLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:89354

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#result)

#### Defined in

main.ts:89350

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md#time)

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

main.ts:89358

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

main.ts:89380

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:89373
