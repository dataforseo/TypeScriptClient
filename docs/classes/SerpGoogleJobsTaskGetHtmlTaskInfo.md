[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetHtmlTaskInfo

# Class: SerpGoogleJobsTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleJobsTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpGoogleJobsTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTaskGetHtmlTaskInfo.md#cost)
- [data](SerpGoogleJobsTaskGetHtmlTaskInfo.md#data)
- [id](SerpGoogleJobsTaskGetHtmlTaskInfo.md#id)
- [path](SerpGoogleJobsTaskGetHtmlTaskInfo.md#path)
- [result](SerpGoogleJobsTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleJobsTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleJobsTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleJobsTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpGoogleJobsTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleJobsTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetHtmlTaskInfo**(`data?`): [`SerpGoogleJobsTaskGetHtmlTaskInfo`](SerpGoogleJobsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetHtmlTaskInfo`](SerpGoogleJobsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:49646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49646)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#cost)

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

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#data)

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

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:49642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49642)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleJobsTaskGetHtmlTaskInfo.md#time)

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

[main.ts:49650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49650)

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

[main.ts:49672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49672)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetHtmlTaskInfo`](SerpGoogleJobsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetHtmlTaskInfo`](SerpGoogleJobsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:49665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49665)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")