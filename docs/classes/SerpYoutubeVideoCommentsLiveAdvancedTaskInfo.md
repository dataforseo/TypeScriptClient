[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsLiveAdvancedTaskInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#cost)
- [data](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#data)
- [id](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#id)
- [path](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#path)
- [result](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsLiveAdvancedTaskInfo**(`data?`): [`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:62528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62528)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#cost)

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

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#data)

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

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:62524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62524)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#result_count)

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

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md#time)

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

[main.ts:62532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62532)

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

[main.ts:62554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62554)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:62547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62547)
