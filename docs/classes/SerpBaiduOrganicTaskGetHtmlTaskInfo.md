[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetHtmlTaskInfo

# Class: SerpBaiduOrganicTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBaiduOrganicTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpBaiduOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#cost)
- [data](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#data)
- [id](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#id)
- [path](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#path)
- [result](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetHtmlTaskInfo**(`data?`): [`SerpBaiduOrganicTaskGetHtmlTaskInfo`](SerpBaiduOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetHtmlTaskInfo`](SerpBaiduOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:67374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67374)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#cost)

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

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#data)

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

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:67370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67370)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpBaiduOrganicTaskGetHtmlTaskInfo.md#time)

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

[main.ts:67378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67378)

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

[main.ts:67400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67400)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetHtmlTaskInfo`](SerpBaiduOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetHtmlTaskInfo`](SerpBaiduOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:67393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67393)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")