[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLighthouseLanguagesResponseInfo

# Class: OnPageLighthouseLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageLighthouseLanguagesResponseInfo`**

## Implements

- [`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseLanguagesResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseLanguagesResponseInfo.md#cost)
- [status\_code](OnPageLighthouseLanguagesResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseLanguagesResponseInfo.md#status_message)
- [tasks](OnPageLighthouseLanguagesResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseLanguagesResponseInfo.md#tasks_error)
- [time](OnPageLighthouseLanguagesResponseInfo.md#time)
- [version](OnPageLighthouseLanguagesResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseLanguagesResponseInfo.md#init)
- [toJSON](OnPageLighthouseLanguagesResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseLanguagesResponseInfo**(`data?`): [`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md) |

#### Returns

[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:153626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153626)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[cost](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#cost)

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

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#status_code)

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

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageLighthouseLanguagesTaskInfo`](OnPageLighthouseLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:153622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153622)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[time](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseLanguagesResponseInfo](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[version](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#version)

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

[main.ts:153630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153630)

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

[main.ts:153652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153652)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:153645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153645)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")