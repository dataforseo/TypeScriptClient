[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTaskPostTaskInfo

# Class: SerpYoutubeVideoInfoTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoInfoTaskPostTaskInfo`**

## Implements

- [`ISerpYoutubeVideoInfoTaskPostTaskInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoInfoTaskPostTaskInfo.md#cost)
- [data](SerpYoutubeVideoInfoTaskPostTaskInfo.md#data)
- [id](SerpYoutubeVideoInfoTaskPostTaskInfo.md#id)
- [path](SerpYoutubeVideoInfoTaskPostTaskInfo.md#path)
- [result](SerpYoutubeVideoInfoTaskPostTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoInfoTaskPostTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoInfoTaskPostTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoInfoTaskPostTaskInfo.md#status_message)
- [time](SerpYoutubeVideoInfoTaskPostTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoInfoTaskPostTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTaskPostTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTaskPostTaskInfo**(`data?`): [`SerpYoutubeVideoInfoTaskPostTaskInfo`](SerpYoutubeVideoInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTaskPostTaskInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTaskPostTaskInfo`](SerpYoutubeVideoInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:57973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57973)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#cost)

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

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#data)

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

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#path)

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

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:57969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57969)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#result_count)

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

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#status_code)

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

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoInfoTaskPostTaskInfo.md#time)

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

[main.ts:57977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57977)

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

[main.ts:57995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57995)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskPostTaskInfo`](SerpYoutubeVideoInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTaskPostTaskInfo`](SerpYoutubeVideoInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:57988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57988)
