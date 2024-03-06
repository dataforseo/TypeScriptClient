[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTaskPostTaskInfo

# Class: SerpYoutubeVideoCommentsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYoutubeVideoCommentsTaskPostTaskInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsTaskPostTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#cost)
- [data](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#data)
- [id](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#id)
- [path](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#path)
- [result](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#status_message)
- [time](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTaskPostTaskInfo**(`data?`): [`SerpYoutubeVideoCommentsTaskPostTaskInfo`](SerpYoutubeVideoCommentsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTaskPostTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTaskPostTaskInfo`](SerpYoutubeVideoCommentsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:61303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61303)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#cost)

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

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#data)

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

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#path)

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

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:61299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61299)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#result_count)

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

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsTaskPostTaskInfo.md#time)

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

[main.ts:61307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61307)

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

[main.ts:61325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61325)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskPostTaskInfo`](SerpYoutubeVideoCommentsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTaskPostTaskInfo`](SerpYoutubeVideoCommentsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:61318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61318)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")