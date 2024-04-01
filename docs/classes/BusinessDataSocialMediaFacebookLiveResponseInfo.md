[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaFacebookLiveResponseInfo

# Class: BusinessDataSocialMediaFacebookLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataSocialMediaFacebookLiveResponseInfo`**

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaFacebookLiveResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataSocialMediaFacebookLiveResponseInfo.md#cost)
- [status\_code](BusinessDataSocialMediaFacebookLiveResponseInfo.md#status_code)
- [status\_message](BusinessDataSocialMediaFacebookLiveResponseInfo.md#status_message)
- [tasks](BusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks)
- [tasks\_count](BusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_error)
- [time](BusinessDataSocialMediaFacebookLiveResponseInfo.md#time)
- [version](BusinessDataSocialMediaFacebookLiveResponseInfo.md#version)

### Methods

- [init](BusinessDataSocialMediaFacebookLiveResponseInfo.md#init)
- [toJSON](BusinessDataSocialMediaFacebookLiveResponseInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaFacebookLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaFacebookLiveResponseInfo**(`data?`): [`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md) |

#### Returns

[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:211552

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[cost](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[status_code](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23022

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[status_message](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[tasks](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks)

#### Defined in

main.ts:211548

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[tasks_count](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[tasks_error](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[time](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResponseInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[version](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

main.ts:211556

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

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:211578

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:211571
