[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskGetHtmlTaskInfo

# Class: SerpGoogleLocalFinderTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleLocalFinderTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#data)
- [id](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#id)
- [path](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#path)
- [result](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskGetHtmlTaskInfo**(`data?`): [`SerpGoogleLocalFinderTaskGetHtmlTaskInfo`](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlTaskInfo`](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:40854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40854)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#data)

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

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:40850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40850)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlTaskInfo.md#time)

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

[main.ts:40858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40858)

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

[main.ts:40880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40880)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetHtmlTaskInfo`](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlTaskInfo`](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:40873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40873)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")