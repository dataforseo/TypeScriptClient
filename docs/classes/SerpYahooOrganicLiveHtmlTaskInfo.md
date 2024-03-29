[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveHtmlTaskInfo

# Class: SerpYahooOrganicLiveHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYahooOrganicLiveHtmlTaskInfo`**

## Implements

- [`ISerpYahooOrganicLiveHtmlTaskInfo`](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicLiveHtmlTaskInfo.md#cost)
- [data](SerpYahooOrganicLiveHtmlTaskInfo.md#data)
- [id](SerpYahooOrganicLiveHtmlTaskInfo.md#id)
- [path](SerpYahooOrganicLiveHtmlTaskInfo.md#path)
- [result](SerpYahooOrganicLiveHtmlTaskInfo.md#result)
- [result\_count](SerpYahooOrganicLiveHtmlTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicLiveHtmlTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicLiveHtmlTaskInfo.md#status_message)
- [time](SerpYahooOrganicLiveHtmlTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicLiveHtmlTaskInfo.md#init)
- [toJSON](SerpYahooOrganicLiveHtmlTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveHtmlTaskInfo**(`data?`): [`SerpYahooOrganicLiveHtmlTaskInfo`](SerpYahooOrganicLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveHtmlTaskInfo`](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md) |

#### Returns

[`SerpYahooOrganicLiveHtmlTaskInfo`](SerpYahooOrganicLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:65096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65096)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#cost)

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

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[data](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#data)

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

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[id](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[path](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[result](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#result)

#### Defined in

[main.ts:65092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65092)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#result_count)

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

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#status_code)

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

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicLiveHtmlTaskInfo](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md).[time](../interfaces/ISerpYahooOrganicLiveHtmlTaskInfo.md#time)

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

[main.ts:65100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65100)

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

[main.ts:65122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65122)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveHtmlTaskInfo`](SerpYahooOrganicLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveHtmlTaskInfo`](SerpYahooOrganicLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:65115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65115)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")