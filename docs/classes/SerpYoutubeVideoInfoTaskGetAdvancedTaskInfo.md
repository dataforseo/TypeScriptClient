[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#data)
- [id](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#id)
- [path](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#path)
- [result](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo**(`data?`): [`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:58930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58930)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#data)

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

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:58926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58926)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:58934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58934)

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

[main.ts:58956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58956)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:58949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58949)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")