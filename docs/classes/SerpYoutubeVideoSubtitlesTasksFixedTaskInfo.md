[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTasksFixedTaskInfo

# Class: SerpYoutubeVideoSubtitlesTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYoutubeVideoSubtitlesTasksFixedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#cost)
- [data](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#data)
- [id](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#id)
- [path](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#path)
- [result](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTasksFixedTaskInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:60114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60114)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#cost)

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

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#data)

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

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:60110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60110)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#result_count)

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

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#status_code)

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

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md#time)

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

[main.ts:60118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60118)

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

[main.ts:60140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60140)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:60133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60133)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")