[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetAdvancedTaskInfo

# Class: SerpGoogleJobsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleJobsTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleJobsTaskGetAdvancedTaskInfo`](SerpGoogleJobsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetAdvancedTaskInfo`](SerpGoogleJobsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:49428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49428)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:49424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49424)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleJobsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:49432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49432)

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

[main.ts:49454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49454)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedTaskInfo`](SerpGoogleJobsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetAdvancedTaskInfo`](SerpGoogleJobsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:49447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49447)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")