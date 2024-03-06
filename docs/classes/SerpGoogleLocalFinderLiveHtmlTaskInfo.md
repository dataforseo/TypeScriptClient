[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderLiveHtmlTaskInfo

# Class: SerpGoogleLocalFinderLiveHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleLocalFinderLiveHtmlTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderLiveHtmlTaskInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#data)
- [id](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#id)
- [path](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#path)
- [result](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderLiveHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderLiveHtmlTaskInfo**(`data?`): [`SerpGoogleLocalFinderLiveHtmlTaskInfo`](SerpGoogleLocalFinderLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderLiveHtmlTaskInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderLiveHtmlTaskInfo`](SerpGoogleLocalFinderLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:41856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41856)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#data)

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

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#result)

#### Defined in

[main.ts:41852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41852)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderLiveHtmlTaskInfo.md#time)

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

[main.ts:41860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41860)

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

[main.ts:41882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41882)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderLiveHtmlTaskInfo`](SerpGoogleLocalFinderLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderLiveHtmlTaskInfo`](SerpGoogleLocalFinderLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:41875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41875)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")