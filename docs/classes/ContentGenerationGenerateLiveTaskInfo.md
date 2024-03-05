[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateLiveTaskInfo

# Class: ContentGenerationGenerateLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationGenerateLiveTaskInfo`**

## Implements

- [`IContentGenerationGenerateLiveTaskInfo`](../interfaces/IContentGenerationGenerateLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateLiveTaskInfo.md#cost)
- [data](ContentGenerationGenerateLiveTaskInfo.md#data)
- [id](ContentGenerationGenerateLiveTaskInfo.md#id)
- [path](ContentGenerationGenerateLiveTaskInfo.md#path)
- [result](ContentGenerationGenerateLiveTaskInfo.md#result)
- [result\_count](ContentGenerationGenerateLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationGenerateLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationGenerateLiveTaskInfo.md#status_message)
- [time](ContentGenerationGenerateLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationGenerateLiveTaskInfo.md#init)
- [toJSON](ContentGenerationGenerateLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationGenerateLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateLiveTaskInfo**(`data?`): [`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateLiveTaskInfo`](../interfaces/IContentGenerationGenerateLiveTaskInfo.md) |

#### Returns

[`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:160099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160099)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[cost](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#cost)

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

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[data](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#data)

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

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[id](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[path](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[result](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#result)

#### Defined in

[main.ts:160095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160095)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#result_count)

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

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#status_code)

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

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationGenerateLiveTaskInfo](../interfaces/IContentGenerationGenerateLiveTaskInfo.md).[time](../interfaces/IContentGenerationGenerateLiveTaskInfo.md#time)

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

[main.ts:160103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160103)

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

[main.ts:160125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160125)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:160118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160118)
