[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTasksReadyTaskInfo

# Class: SerpGoogleImagesTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleImagesTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleImagesTasksReadyTaskInfo`](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleImagesTasksReadyTaskInfo.md#data)
- [id](SerpGoogleImagesTasksReadyTaskInfo.md#id)
- [path](SerpGoogleImagesTasksReadyTaskInfo.md#path)
- [result](SerpGoogleImagesTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleImagesTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleImagesTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleImagesTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleImagesTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleImagesTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleImagesTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleImagesTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTasksReadyTaskInfo**(`data?`): [`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTasksReadyTaskInfo`](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:45778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45778)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#data)

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

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:45774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45774)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleImagesTasksReadyTaskInfo](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleImagesTasksReadyTaskInfo.md#time)

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

[main.ts:45782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45782)

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

[main.ts:45804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45804)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:45797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45797)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")