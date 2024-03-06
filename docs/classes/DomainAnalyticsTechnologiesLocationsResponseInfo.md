[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesLocationsResponseInfo

# Class: DomainAnalyticsTechnologiesLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesLocationsResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesLocationsResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesLocationsResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesLocationsResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesLocationsResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesLocationsResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesLocationsResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesLocationsResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesLocationsResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesLocationsResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:71883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71883)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesLocationsTaskInfo`](DomainAnalyticsTechnologiesLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks)

#### Defined in

[main.ts:71879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71879)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#version)

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

[main.ts:71887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71887)

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

[main.ts:71909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71909)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:71902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71902)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")