[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateTextLiveTaskInfo

# Class: ContentGenerationGenerateTextLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationGenerateTextLiveTaskInfo`**

## Implements

- [`IContentGenerationGenerateTextLiveTaskInfo`](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateTextLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateTextLiveTaskInfo.md#cost)
- [data](ContentGenerationGenerateTextLiveTaskInfo.md#data)
- [id](ContentGenerationGenerateTextLiveTaskInfo.md#id)
- [path](ContentGenerationGenerateTextLiveTaskInfo.md#path)
- [result](ContentGenerationGenerateTextLiveTaskInfo.md#result)
- [result\_count](ContentGenerationGenerateTextLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationGenerateTextLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationGenerateTextLiveTaskInfo.md#status_message)
- [time](ContentGenerationGenerateTextLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationGenerateTextLiveTaskInfo.md#init)
- [toJSON](ContentGenerationGenerateTextLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationGenerateTextLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateTextLiveTaskInfo**(`data?`): [`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateTextLiveTaskInfo`](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md) |

#### Returns

[`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:160465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160465)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[cost](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#cost)

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

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[data](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#data)

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

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[id](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[path](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[result](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#result)

#### Defined in

[main.ts:160461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160461)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#result_count)

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

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#status_code)

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

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationGenerateTextLiveTaskInfo](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md).[time](../interfaces/IContentGenerationGenerateTextLiveTaskInfo.md#time)

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

[main.ts:160469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160469)

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

[main.ts:160491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160491)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:160484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160484)
