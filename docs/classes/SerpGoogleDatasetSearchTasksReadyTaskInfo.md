[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksReadyTaskInfo

# Class: SerpGoogleDatasetSearchTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleDatasetSearchTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyTaskInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#data)
- [id](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#id)
- [path](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#path)
- [result](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTasksReadyTaskInfo**(`data?`): [`SerpGoogleDatasetSearchTasksReadyTaskInfo`](SerpGoogleDatasetSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTasksReadyTaskInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTasksReadyTaskInfo`](SerpGoogleDatasetSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:50244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50244)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#data)

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

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleDatasetSearchTasksReadyResultInfo`](SerpGoogleDatasetSearchTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:50240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50240)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchTasksReadyTaskInfo.md#time)

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

[main.ts:50248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50248)

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

[main.ts:50270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50270)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyTaskInfo`](SerpGoogleDatasetSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTasksReadyTaskInfo`](SerpGoogleDatasetSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:50263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50263)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")