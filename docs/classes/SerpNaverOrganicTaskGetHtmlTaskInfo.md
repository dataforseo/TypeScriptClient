[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetHtmlTaskInfo

# Class: SerpNaverOrganicTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpNaverOrganicTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpNaverOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskGetHtmlTaskInfo.md#cost)
- [data](SerpNaverOrganicTaskGetHtmlTaskInfo.md#data)
- [id](SerpNaverOrganicTaskGetHtmlTaskInfo.md#id)
- [path](SerpNaverOrganicTaskGetHtmlTaskInfo.md#path)
- [result](SerpNaverOrganicTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpNaverOrganicTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpNaverOrganicTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpNaverOrganicTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpNaverOrganicTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetHtmlTaskInfo**(`data?`): [`SerpNaverOrganicTaskGetHtmlTaskInfo`](SerpNaverOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetHtmlTaskInfo`](SerpNaverOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:68648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68648)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#cost)

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

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#data)

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

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:68644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68644)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpNaverOrganicTaskGetHtmlTaskInfo.md#time)

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

[main.ts:68652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68652)

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

[main.ts:68674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68674)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlTaskInfo`](SerpNaverOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetHtmlTaskInfo`](SerpNaverOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:68667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68667)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")