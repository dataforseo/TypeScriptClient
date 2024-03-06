[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTaskPostTaskInfo

# Class: SerpYoutubeVideoSubtitlesTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskPostTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#cost)
- [data](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#data)
- [id](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#id)
- [path](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#path)
- [result](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#status_message)
- [time](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTaskPostTaskInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTaskPostTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:59697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59697)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#cost)

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

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#data)

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

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:59693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59693)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#result_count)

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

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#status_code)

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

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostTaskInfo.md#time)

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

[main.ts:59701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59701)

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

[main.ts:59719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59719)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:59712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59712)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")