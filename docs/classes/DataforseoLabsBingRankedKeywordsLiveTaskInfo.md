[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRankedKeywordsLiveTaskInfo

# Class: DataforseoLabsBingRankedKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingRankedKeywordsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#data)
- [id](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#id)
- [path](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#path)
- [result](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRankedKeywordsLiveTaskInfo**(`data?`): [`DataforseoLabsBingRankedKeywordsLiveTaskInfo`](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRankedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveTaskInfo`](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:105516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105516)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#data)

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

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:105512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105512)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingRankedKeywordsLiveTaskInfo.md#time)

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

[main.ts:105520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105520)

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

[main.ts:105542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105542)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveTaskInfo`](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveTaskInfo`](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:105535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105535)
