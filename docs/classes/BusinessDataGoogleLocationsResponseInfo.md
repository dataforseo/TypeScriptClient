[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLocationsResponseInfo

# Class: BusinessDataGoogleLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleLocationsResponseInfo`**

## Implements

- [`IBusinessDataGoogleLocationsResponseInfo`](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLocationsResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleLocationsResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleLocationsResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleLocationsResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleLocationsResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleLocationsResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleLocationsResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleLocationsResponseInfo.md#time)
- [version](BusinessDataGoogleLocationsResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleLocationsResponseInfo.md#init)
- [toJSON](BusinessDataGoogleLocationsResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLocationsResponseInfo**(`data?`): [`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLocationsResponseInfo`](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md) |

#### Returns

[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:190311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190311)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleLocationsTaskInfo`](BusinessDataGoogleLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#tasks)

#### Defined in

[main.ts:190307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190307)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[time](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleLocationsResponseInfo](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md).[version](../interfaces/IBusinessDataGoogleLocationsResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:190315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190315)

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

[main.ts:190337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190337)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:190330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190330)
