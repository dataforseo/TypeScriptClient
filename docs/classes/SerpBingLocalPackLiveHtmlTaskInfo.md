[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackLiveHtmlTaskInfo

# Class: SerpBingLocalPackLiveHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingLocalPackLiveHtmlTaskInfo`**

## Implements

- [`ISerpBingLocalPackLiveHtmlTaskInfo`](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackLiveHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackLiveHtmlTaskInfo.md#cost)
- [data](SerpBingLocalPackLiveHtmlTaskInfo.md#data)
- [id](SerpBingLocalPackLiveHtmlTaskInfo.md#id)
- [path](SerpBingLocalPackLiveHtmlTaskInfo.md#path)
- [result](SerpBingLocalPackLiveHtmlTaskInfo.md#result)
- [result\_count](SerpBingLocalPackLiveHtmlTaskInfo.md#result_count)
- [status\_code](SerpBingLocalPackLiveHtmlTaskInfo.md#status_code)
- [status\_message](SerpBingLocalPackLiveHtmlTaskInfo.md#status_message)
- [time](SerpBingLocalPackLiveHtmlTaskInfo.md#time)

### Methods

- [init](SerpBingLocalPackLiveHtmlTaskInfo.md#init)
- [toJSON](SerpBingLocalPackLiveHtmlTaskInfo.md#tojson)
- [fromJS](SerpBingLocalPackLiveHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackLiveHtmlTaskInfo**(`data?`): [`SerpBingLocalPackLiveHtmlTaskInfo`](SerpBingLocalPackLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackLiveHtmlTaskInfo`](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md) |

#### Returns

[`SerpBingLocalPackLiveHtmlTaskInfo`](SerpBingLocalPackLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:57066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57066)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[cost](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#cost)

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

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[data](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#data)

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

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[id](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[path](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[result](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#result)

#### Defined in

[main.ts:57062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57062)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[result_count](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#result_count)

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

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[status_code](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#status_code)

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

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[status_message](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocalPackLiveHtmlTaskInfo](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md).[time](../interfaces/ISerpBingLocalPackLiveHtmlTaskInfo.md#time)

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

[main.ts:57070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57070)

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

[main.ts:57092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57092)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackLiveHtmlTaskInfo`](SerpBingLocalPackLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackLiveHtmlTaskInfo`](SerpBingLocalPackLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:57085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57085)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")