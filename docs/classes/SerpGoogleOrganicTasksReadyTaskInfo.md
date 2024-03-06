[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTasksReadyTaskInfo

# Class: SerpGoogleOrganicTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleOrganicTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleOrganicTasksReadyTaskInfo`](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleOrganicTasksReadyTaskInfo.md#data)
- [id](SerpGoogleOrganicTasksReadyTaskInfo.md#id)
- [path](SerpGoogleOrganicTasksReadyTaskInfo.md#path)
- [result](SerpGoogleOrganicTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleOrganicTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTasksReadyTaskInfo**(`data?`): [`SerpGoogleOrganicTasksReadyTaskInfo`](SerpGoogleOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTasksReadyTaskInfo`](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicTasksReadyTaskInfo`](SerpGoogleOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:24832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24832)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#data)

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

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:24828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24828)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTasksReadyTaskInfo](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicTasksReadyTaskInfo.md#time)

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

[main.ts:24836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24836)

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

[main.ts:24858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24858)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTasksReadyTaskInfo`](SerpGoogleOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTasksReadyTaskInfo`](SerpGoogleOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:24851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24851)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")