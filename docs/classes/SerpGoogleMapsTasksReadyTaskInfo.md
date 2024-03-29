[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTasksReadyTaskInfo

# Class: SerpGoogleMapsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleMapsTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleMapsTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleMapsTasksReadyTaskInfo.md#data)
- [id](SerpGoogleMapsTasksReadyTaskInfo.md#id)
- [path](SerpGoogleMapsTasksReadyTaskInfo.md#path)
- [result](SerpGoogleMapsTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleMapsTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleMapsTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleMapsTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleMapsTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleMapsTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleMapsTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleMapsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsTasksReadyTaskInfo**(`data?`): [`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:37892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37892)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#data)

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

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:37888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37888)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleMapsTasksReadyTaskInfo](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#time)

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

[main.ts:37896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37896)

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

[main.ts:37918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37918)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:37911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37911)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")