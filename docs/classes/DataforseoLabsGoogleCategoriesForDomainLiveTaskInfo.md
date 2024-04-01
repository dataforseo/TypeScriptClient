[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:85959

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result)

#### Defined in

main.ts:85955

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#time)

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

main.ts:85963

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

main.ts:85985

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:85978
