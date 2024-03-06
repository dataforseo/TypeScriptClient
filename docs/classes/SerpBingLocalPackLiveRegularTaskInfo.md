[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackLiveRegularTaskInfo

# Class: SerpBingLocalPackLiveRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingLocalPackLiveRegularTaskInfo`**

## Implements

- [`ISerpBingLocalPackLiveRegularTaskInfo`](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackLiveRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackLiveRegularTaskInfo.md#cost)
- [data](SerpBingLocalPackLiveRegularTaskInfo.md#data)
- [id](SerpBingLocalPackLiveRegularTaskInfo.md#id)
- [path](SerpBingLocalPackLiveRegularTaskInfo.md#path)
- [result](SerpBingLocalPackLiveRegularTaskInfo.md#result)
- [result\_count](SerpBingLocalPackLiveRegularTaskInfo.md#result_count)
- [status\_code](SerpBingLocalPackLiveRegularTaskInfo.md#status_code)
- [status\_message](SerpBingLocalPackLiveRegularTaskInfo.md#status_message)
- [time](SerpBingLocalPackLiveRegularTaskInfo.md#time)

### Methods

- [init](SerpBingLocalPackLiveRegularTaskInfo.md#init)
- [toJSON](SerpBingLocalPackLiveRegularTaskInfo.md#tojson)
- [fromJS](SerpBingLocalPackLiveRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackLiveRegularTaskInfo**(`data?`): [`SerpBingLocalPackLiveRegularTaskInfo`](SerpBingLocalPackLiveRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackLiveRegularTaskInfo`](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md) |

#### Returns

[`SerpBingLocalPackLiveRegularTaskInfo`](SerpBingLocalPackLiveRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:56848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56848)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[cost](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#cost)

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

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[data](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#data)

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

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[id](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[path](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[result](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#result)

#### Defined in

[main.ts:56844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56844)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[result_count](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#result_count)

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

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[status_code](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#status_code)

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

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[status_message](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocalPackLiveRegularTaskInfo](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md).[time](../interfaces/ISerpBingLocalPackLiveRegularTaskInfo.md#time)

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

[main.ts:56852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56852)

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

[main.ts:56874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56874)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackLiveRegularTaskInfo`](SerpBingLocalPackLiveRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackLiveRegularTaskInfo`](SerpBingLocalPackLiveRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:56867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56867)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")