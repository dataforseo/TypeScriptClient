[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooLocationsCountryResponseInfo

# Class: SerpYahooLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYahooLocationsCountryResponseInfo`**

## Implements

- [`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooLocationsCountryResponseInfo.md#cost)
- [status\_code](SerpYahooLocationsCountryResponseInfo.md#status_code)
- [status\_message](SerpYahooLocationsCountryResponseInfo.md#status_message)
- [tasks](SerpYahooLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](SerpYahooLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooLocationsCountryResponseInfo.md#tasks_error)
- [time](SerpYahooLocationsCountryResponseInfo.md#time)
- [version](SerpYahooLocationsCountryResponseInfo.md#version)

### Methods

- [init](SerpYahooLocationsCountryResponseInfo.md#init)
- [toJSON](SerpYahooLocationsCountryResponseInfo.md#tojson)
- [fromJS](SerpYahooLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooLocationsCountryResponseInfo**(`data?`): [`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md) |

#### Returns

[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:62979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62979)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[cost](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#cost)

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

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[status_code](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#status_code)

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

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[status_message](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYahooLocationsCountryTaskInfo`](SerpYahooLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[tasks](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:62975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62975)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[tasks_count](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[tasks_error](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[time](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooLocationsCountryResponseInfo](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[version](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#version)

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

[main.ts:62983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62983)

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

[main.ts:63005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63005)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:62998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62998)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")