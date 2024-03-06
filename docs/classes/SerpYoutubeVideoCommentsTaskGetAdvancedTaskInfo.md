[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo

# Class: SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#data)
- [id](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#id)
- [path](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#path)
- [result](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo**(`data?`): [`SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:62092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62092)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#data)

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

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:62088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62088)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:62096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62096)

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

[main.ts:62118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62118)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:62111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62111)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")