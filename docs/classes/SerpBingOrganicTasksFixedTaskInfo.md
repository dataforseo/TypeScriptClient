[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTasksFixedTaskInfo

# Class: SerpBingOrganicTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingOrganicTasksFixedTaskInfo`**

## Implements

- [`ISerpBingOrganicTasksFixedTaskInfo`](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTasksFixedTaskInfo.md#cost)
- [data](SerpBingOrganicTasksFixedTaskInfo.md#data)
- [id](SerpBingOrganicTasksFixedTaskInfo.md#id)
- [path](SerpBingOrganicTasksFixedTaskInfo.md#path)
- [result](SerpBingOrganicTasksFixedTaskInfo.md#result)
- [result\_count](SerpBingOrganicTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpBingOrganicTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpBingOrganicTasksFixedTaskInfo.md#status_message)
- [time](SerpBingOrganicTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpBingOrganicTasksFixedTaskInfo.md#init)
- [toJSON](SerpBingOrganicTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpBingOrganicTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTasksFixedTaskInfo**(`data?`): [`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTasksFixedTaskInfo`](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md) |

#### Returns

[`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:54104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54104)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[cost](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#cost)

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

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[data](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#data)

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

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[id](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[path](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingOrganicTasksFixedResultInfo`](SerpBingOrganicTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[result](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:54100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54100)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#result_count)

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

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#status_code)

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

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingOrganicTasksFixedTaskInfo](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md).[time](../interfaces/ISerpBingOrganicTasksFixedTaskInfo.md#time)

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

[main.ts:54108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54108)

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

[main.ts:54130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54130)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:54123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54123)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")