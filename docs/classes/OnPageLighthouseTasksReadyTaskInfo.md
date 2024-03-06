[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLighthouseTasksReadyTaskInfo

# Class: OnPageLighthouseTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`OnPageLighthouseTasksReadyTaskInfo`**

## Implements

- [`IOnPageLighthouseTasksReadyTaskInfo`](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseTasksReadyTaskInfo.md#cost)
- [data](OnPageLighthouseTasksReadyTaskInfo.md#data)
- [id](OnPageLighthouseTasksReadyTaskInfo.md#id)
- [path](OnPageLighthouseTasksReadyTaskInfo.md#path)
- [result](OnPageLighthouseTasksReadyTaskInfo.md#result)
- [result\_count](OnPageLighthouseTasksReadyTaskInfo.md#result_count)
- [status\_code](OnPageLighthouseTasksReadyTaskInfo.md#status_code)
- [status\_message](OnPageLighthouseTasksReadyTaskInfo.md#status_message)
- [time](OnPageLighthouseTasksReadyTaskInfo.md#time)

### Methods

- [init](OnPageLighthouseTasksReadyTaskInfo.md#init)
- [toJSON](OnPageLighthouseTasksReadyTaskInfo.md#tojson)
- [fromJS](OnPageLighthouseTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseTasksReadyTaskInfo**(`data?`): [`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseTasksReadyTaskInfo`](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md) |

#### Returns

[`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:154485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154485)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[cost](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___


### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[data](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___


### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[id](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[path](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[result](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:154481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154481)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[result_count](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[status_code](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___


### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[status_message](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IOnPageLighthouseTasksReadyTaskInfo](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md).[time](../interfaces/IOnPageLighthouseTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

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

[main.ts:154489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154489)

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

[main.ts:154511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154511)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:154504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154504)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")