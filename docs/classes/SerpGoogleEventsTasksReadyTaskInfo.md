[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTasksReadyTaskInfo

# Class: SerpGoogleEventsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleEventsTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleEventsTasksReadyTaskInfo`](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleEventsTasksReadyTaskInfo.md#data)
- [id](SerpGoogleEventsTasksReadyTaskInfo.md#id)
- [path](SerpGoogleEventsTasksReadyTaskInfo.md#path)
- [result](SerpGoogleEventsTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleEventsTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleEventsTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleEventsTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleEventsTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleEventsTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleEventsTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleEventsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTasksReadyTaskInfo**(`data?`): [`SerpGoogleEventsTasksReadyTaskInfo`](SerpGoogleEventsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTasksReadyTaskInfo`](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleEventsTasksReadyTaskInfo`](SerpGoogleEventsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:44104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44104)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#data)

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

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:44100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44100)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleEventsTasksReadyTaskInfo](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleEventsTasksReadyTaskInfo.md#time)

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

[main.ts:44108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44108)

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

[main.ts:44130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44130)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTasksReadyTaskInfo`](SerpGoogleEventsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTasksReadyTaskInfo`](SerpGoogleEventsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:44123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44123)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")