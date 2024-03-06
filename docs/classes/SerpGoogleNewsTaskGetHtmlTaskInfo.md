[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTaskGetHtmlTaskInfo

# Class: SerpGoogleNewsTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleNewsTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpGoogleNewsTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsTaskGetHtmlTaskInfo.md#cost)
- [data](SerpGoogleNewsTaskGetHtmlTaskInfo.md#data)
- [id](SerpGoogleNewsTaskGetHtmlTaskInfo.md#id)
- [path](SerpGoogleNewsTaskGetHtmlTaskInfo.md#path)
- [result](SerpGoogleNewsTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleNewsTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleNewsTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleNewsTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpGoogleNewsTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleNewsTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleNewsTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleNewsTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTaskGetHtmlTaskInfo**(`data?`): [`SerpGoogleNewsTaskGetHtmlTaskInfo`](SerpGoogleNewsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleNewsTaskGetHtmlTaskInfo`](SerpGoogleNewsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:42990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42990)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#cost)

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

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#data)

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

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:42986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42986)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleNewsTaskGetHtmlTaskInfo.md#time)

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

[main.ts:42994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42994)

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

[main.ts:43016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43016)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTaskGetHtmlTaskInfo`](SerpGoogleNewsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTaskGetHtmlTaskInfo`](SerpGoogleNewsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:43009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43009)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")