[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTaskGetHtmlTaskInfo

# Class: SerpBingLocalPackTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingLocalPackTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpBingLocalPackTaskGetHtmlTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTaskGetHtmlTaskInfo.md#cost)
- [data](SerpBingLocalPackTaskGetHtmlTaskInfo.md#data)
- [id](SerpBingLocalPackTaskGetHtmlTaskInfo.md#id)
- [path](SerpBingLocalPackTaskGetHtmlTaskInfo.md#path)
- [result](SerpBingLocalPackTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpBingLocalPackTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpBingLocalPackTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpBingLocalPackTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpBingLocalPackTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpBingLocalPackTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpBingLocalPackTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpBingLocalPackTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTaskGetHtmlTaskInfo**(`data?`): [`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTaskGetHtmlTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:56588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56588)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#cost)

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

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#data)

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

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:56584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56584)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlTaskInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpBingLocalPackTaskGetHtmlTaskInfo.md#time)

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

[main.ts:56592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56592)

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

[main.ts:56614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56614)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:56607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56607)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")