[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLighthouseLiveJsonResponseInfo

# Class: OnPageLighthouseLiveJsonResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageLighthouseLiveJsonResponseInfo`**

## Implements

- [`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseLiveJsonResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseLiveJsonResponseInfo.md#cost)
- [status\_code](OnPageLighthouseLiveJsonResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseLiveJsonResponseInfo.md#status_message)
- [tasks](OnPageLighthouseLiveJsonResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseLiveJsonResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseLiveJsonResponseInfo.md#tasks_error)
- [time](OnPageLighthouseLiveJsonResponseInfo.md#time)
- [version](OnPageLighthouseLiveJsonResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseLiveJsonResponseInfo.md#init)
- [toJSON](OnPageLighthouseLiveJsonResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseLiveJsonResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseLiveJsonResponseInfo**(`data?`): [`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md) |

#### Returns

[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:154956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154956)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[cost](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#cost)

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

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#status_code)

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

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageLighthouseLiveJsonTaskInfo`](OnPageLighthouseLiveJsonTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#tasks)

#### Defined in

[main.ts:154952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154952)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[time](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseLiveJsonResponseInfo](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[version](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#version)

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

[main.ts:154960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154960)

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

[main.ts:154982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154982)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:154975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154975)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")