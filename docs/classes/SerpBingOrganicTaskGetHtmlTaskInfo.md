[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetHtmlTaskInfo

# Class: SerpBingOrganicTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingOrganicTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpBingOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskGetHtmlTaskInfo.md#cost)
- [data](SerpBingOrganicTaskGetHtmlTaskInfo.md#data)
- [id](SerpBingOrganicTaskGetHtmlTaskInfo.md#id)
- [path](SerpBingOrganicTaskGetHtmlTaskInfo.md#path)
- [result](SerpBingOrganicTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpBingOrganicTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpBingOrganicTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpBingOrganicTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpBingOrganicTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetHtmlTaskInfo**(`data?`): [`SerpBingOrganicTaskGetHtmlTaskInfo`](SerpBingOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetHtmlTaskInfo`](SerpBingOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:54844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54844)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#cost)

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

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#data)

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

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:54840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54840)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpBingOrganicTaskGetHtmlTaskInfo.md#time)

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

[main.ts:54848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54848)

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

[main.ts:54870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54870)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetHtmlTaskInfo`](SerpBingOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetHtmlTaskInfo`](SerpBingOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:54863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54863)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")