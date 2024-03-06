[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetHtmlTaskInfo

# Class: SerpYahooOrganicTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYahooOrganicTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpYahooOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskGetHtmlTaskInfo.md#cost)
- [data](SerpYahooOrganicTaskGetHtmlTaskInfo.md#data)
- [id](SerpYahooOrganicTaskGetHtmlTaskInfo.md#id)
- [path](SerpYahooOrganicTaskGetHtmlTaskInfo.md#path)
- [result](SerpYahooOrganicTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpYahooOrganicTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpYahooOrganicTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetHtmlTaskInfo**(`data?`): [`SerpYahooOrganicTaskGetHtmlTaskInfo`](SerpYahooOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetHtmlTaskInfo`](SerpYahooOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:64360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64360)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#cost)

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

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#data)

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

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:64356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64356)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpYahooOrganicTaskGetHtmlTaskInfo.md#time)

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

[main.ts:64364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64364)

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

[main.ts:64386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64386)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetHtmlTaskInfo`](SerpYahooOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetHtmlTaskInfo`](SerpYahooOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:64379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64379)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")