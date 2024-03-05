[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:80500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80500)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:80496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80496)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#time)

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

[main.ts:80504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80504)

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

[main.ts:80526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80526)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:80519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80519)
