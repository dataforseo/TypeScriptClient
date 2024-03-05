[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamLocationsResponseInfo

# Class: SerpSeznamLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamLocationsResponseInfo`**

## Implements

- [`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamLocationsResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamLocationsResponseInfo.md#cost)
- [status\_code](SerpSeznamLocationsResponseInfo.md#status_code)
- [status\_message](SerpSeznamLocationsResponseInfo.md#status_message)
- [tasks](SerpSeznamLocationsResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamLocationsResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamLocationsResponseInfo.md#tasks_error)
- [time](SerpSeznamLocationsResponseInfo.md#time)
- [version](SerpSeznamLocationsResponseInfo.md#version)

### Methods

- [init](SerpSeznamLocationsResponseInfo.md#init)
- [toJSON](SerpSeznamLocationsResponseInfo.md#tojson)
- [fromJS](SerpSeznamLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamLocationsResponseInfo**(`data?`): [`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md) |

#### Returns

[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:68891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68891)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[cost](../interfaces/ISerpSeznamLocationsResponseInfo.md#cost)

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

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[status_code](../interfaces/ISerpSeznamLocationsResponseInfo.md#status_code)

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

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[status_message](../interfaces/ISerpSeznamLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpSeznamLocationsTaskInfo`](SerpSeznamLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[tasks](../interfaces/ISerpSeznamLocationsResponseInfo.md#tasks)

#### Defined in

[main.ts:68887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68887)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[time](../interfaces/ISerpSeznamLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamLocationsResponseInfo](../interfaces/ISerpSeznamLocationsResponseInfo.md).[version](../interfaces/ISerpSeznamLocationsResponseInfo.md#version)

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

[main.ts:68895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68895)

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

[main.ts:68917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68917)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:68910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68910)
