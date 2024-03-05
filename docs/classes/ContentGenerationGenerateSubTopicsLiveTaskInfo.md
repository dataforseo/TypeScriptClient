[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateSubTopicsLiveTaskInfo

# Class: ContentGenerationGenerateSubTopicsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationGenerateSubTopicsLiveTaskInfo`**

## Implements

- [`IContentGenerationGenerateSubTopicsLiveTaskInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#cost)
- [data](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#data)
- [id](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#id)
- [path](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#path)
- [result](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#result)
- [result\_count](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#status_message)
- [time](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#init)
- [toJSON](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationGenerateSubTopicsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateSubTopicsLiveTaskInfo**(`data?`): [`ContentGenerationGenerateSubTopicsLiveTaskInfo`](ContentGenerationGenerateSubTopicsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateSubTopicsLiveTaskInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md) |

#### Returns

[`ContentGenerationGenerateSubTopicsLiveTaskInfo`](ContentGenerationGenerateSubTopicsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:161009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161009)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[cost](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#cost)

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

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[data](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#data)

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

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[id](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[path](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationGenerateSubTopicsLiveResultInfo`](ContentGenerationGenerateSubTopicsLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[result](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#result)

#### Defined in

[main.ts:161005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161005)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#result_count)

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

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#status_code)

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

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveTaskInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md).[time](../interfaces/IContentGenerationGenerateSubTopicsLiveTaskInfo.md#time)

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

[main.ts:161013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161013)

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

[main.ts:161035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161035)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateSubTopicsLiveTaskInfo`](ContentGenerationGenerateSubTopicsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateSubTopicsLiveTaskInfo`](ContentGenerationGenerateSubTopicsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:161028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161028)
