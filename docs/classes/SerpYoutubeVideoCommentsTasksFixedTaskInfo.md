[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTasksFixedTaskInfo

# Class: SerpYoutubeVideoCommentsTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoCommentsTasksFixedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsTasksFixedTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#cost)
- [data](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#data)
- [id](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#id)
- [path](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#path)
- [result](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTasksFixedTaskInfo**(`data?`): [`SerpYoutubeVideoCommentsTasksFixedTaskInfo`](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTasksFixedTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedTaskInfo`](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:61720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61720)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#cost)

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

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#data)

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

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:61716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61716)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#result_count)

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

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsTasksFixedTaskInfo.md#time)

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

[main.ts:61724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61724)

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

[main.ts:61746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61746)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksFixedTaskInfo`](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedTaskInfo`](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:61739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61739)
