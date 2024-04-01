[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo

# Class: BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#cost)
- [data](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#data)
- [id](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#id)
- [path](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#path)
- [result](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#result)
- [result\_count](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#status_message)
- [time](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:196178

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[data](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#data)

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

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[id](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[path](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[result](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#result)

#### Defined in

main.ts:196174

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#result_count)

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

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md#time)

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

main.ts:196182

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

main.ts:196200

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:196193
