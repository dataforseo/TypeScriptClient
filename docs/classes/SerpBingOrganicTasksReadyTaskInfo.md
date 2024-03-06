[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTasksReadyTaskInfo

# Class: SerpBingOrganicTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingOrganicTasksReadyTaskInfo`**

## Implements

- [`ISerpBingOrganicTasksReadyTaskInfo`](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTasksReadyTaskInfo.md#cost)
- [data](SerpBingOrganicTasksReadyTaskInfo.md#data)
- [id](SerpBingOrganicTasksReadyTaskInfo.md#id)
- [path](SerpBingOrganicTasksReadyTaskInfo.md#path)
- [result](SerpBingOrganicTasksReadyTaskInfo.md#result)
- [result\_count](SerpBingOrganicTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpBingOrganicTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpBingOrganicTasksReadyTaskInfo.md#status_message)
- [time](SerpBingOrganicTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpBingOrganicTasksReadyTaskInfo.md#init)
- [toJSON](SerpBingOrganicTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpBingOrganicTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTasksReadyTaskInfo**(`data?`): [`SerpBingOrganicTasksReadyTaskInfo`](SerpBingOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTasksReadyTaskInfo`](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md) |

#### Returns

[`SerpBingOrganicTasksReadyTaskInfo`](SerpBingOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:53892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53892)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[cost](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#cost)

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

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[data](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#data)

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

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[id](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[path](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[result](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:53888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53888)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#result_count)

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

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#status_code)

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

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingOrganicTasksReadyTaskInfo](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md).[time](../interfaces/ISerpBingOrganicTasksReadyTaskInfo.md#time)

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

[main.ts:53896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53896)

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

[main.ts:53918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53918)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTasksReadyTaskInfo`](SerpBingOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTasksReadyTaskInfo`](SerpBingOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:53911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53911)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")