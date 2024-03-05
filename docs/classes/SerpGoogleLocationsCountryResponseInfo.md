[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocationsCountryResponseInfo

# Class: SerpGoogleLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLocationsCountryResponseInfo`**

## Implements

- [`ISerpGoogleLocationsCountryResponseInfo`](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocationsCountryResponseInfo.md#cost)
- [status\_code](SerpGoogleLocationsCountryResponseInfo.md#status_code)
- [status\_message](SerpGoogleLocationsCountryResponseInfo.md#status_message)
- [tasks](SerpGoogleLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLocationsCountryResponseInfo.md#tasks_error)
- [time](SerpGoogleLocationsCountryResponseInfo.md#time)
- [version](SerpGoogleLocationsCountryResponseInfo.md#version)

### Methods

- [init](SerpGoogleLocationsCountryResponseInfo.md#init)
- [toJSON](SerpGoogleLocationsCountryResponseInfo.md#tojson)
- [fromJS](SerpGoogleLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocationsCountryResponseInfo**(`data?`): [`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocationsCountryResponseInfo`](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md) |

#### Returns

[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:24405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24405)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[cost](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#cost)

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

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[status_code](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#status_code)

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

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[status_message](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLocationsCountryTaskInfo`](SerpGoogleLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[tasks](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:24401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24401)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[time](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLocationsCountryResponseInfo](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md).[version](../interfaces/ISerpGoogleLocationsCountryResponseInfo.md#version)

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

[main.ts:24409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24409)

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

[main.ts:24431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24431)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:24424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24424)
