[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRankedKeywordsLiveTaskInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleRankedKeywordsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRankedKeywordsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:87242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87242)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:87238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87238)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md#time)

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

[main.ts:87246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87246)

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

[main.ts:87268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87268)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:87261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87261)
