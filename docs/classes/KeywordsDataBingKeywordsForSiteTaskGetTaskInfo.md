[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTaskGetTaskInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTaskGetTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:124359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124359)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:124355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124355)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md#time)

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

[main.ts:124363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124363)

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

[main.ts:124385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124385)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:124378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124378)
