[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTasksReadyTaskInfo

# Class: SerpNaverOrganicTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpNaverOrganicTasksReadyTaskInfo`**

## Implements

- [`ISerpNaverOrganicTasksReadyTaskInfo`](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTasksReadyTaskInfo.md#cost)
- [data](SerpNaverOrganicTasksReadyTaskInfo.md#data)
- [id](SerpNaverOrganicTasksReadyTaskInfo.md#id)
- [path](SerpNaverOrganicTasksReadyTaskInfo.md#path)
- [result](SerpNaverOrganicTasksReadyTaskInfo.md#result)
- [result\_count](SerpNaverOrganicTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpNaverOrganicTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpNaverOrganicTasksReadyTaskInfo.md#status_message)
- [time](SerpNaverOrganicTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpNaverOrganicTasksReadyTaskInfo.md#init)
- [toJSON](SerpNaverOrganicTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpNaverOrganicTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTasksReadyTaskInfo**(`data?`): [`SerpNaverOrganicTasksReadyTaskInfo`](SerpNaverOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTasksReadyTaskInfo`](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md) |

#### Returns

[`SerpNaverOrganicTasksReadyTaskInfo`](SerpNaverOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:67690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67690)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[cost](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#cost)

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

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[data](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#data)

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

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[id](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[path](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpNaverOrganicTasksReadyResultInfo`](SerpNaverOrganicTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[result](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:67686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67686)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#result_count)

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

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#status_code)

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

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpNaverOrganicTasksReadyTaskInfo](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md).[time](../interfaces/ISerpNaverOrganicTasksReadyTaskInfo.md#time)

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

[main.ts:67694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67694)

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

[main.ts:67716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67716)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTasksReadyTaskInfo`](SerpNaverOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTasksReadyTaskInfo`](SerpNaverOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:67709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67709)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")