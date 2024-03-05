[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateMetaTagsLiveTaskInfo

# Class: ContentGenerationGenerateMetaTagsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationGenerateMetaTagsLiveTaskInfo`**

## Implements

- [`IContentGenerationGenerateMetaTagsLiveTaskInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#cost)
- [data](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#data)
- [id](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#id)
- [path](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#path)
- [result](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#result)
- [result\_count](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#status_message)
- [time](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#init)
- [toJSON](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationGenerateMetaTagsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateMetaTagsLiveTaskInfo**(`data?`): [`ContentGenerationGenerateMetaTagsLiveTaskInfo`](ContentGenerationGenerateMetaTagsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateMetaTagsLiveTaskInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md) |

#### Returns

[`ContentGenerationGenerateMetaTagsLiveTaskInfo`](ContentGenerationGenerateMetaTagsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:160737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160737)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[cost](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#cost)

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

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[data](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#data)

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

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[id](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[path](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationGenerateMetaTagsLiveResultInfo`](ContentGenerationGenerateMetaTagsLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[result](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#result)

#### Defined in

[main.ts:160733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160733)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#result_count)

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

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#status_code)

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

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveTaskInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md).[time](../interfaces/IContentGenerationGenerateMetaTagsLiveTaskInfo.md#time)

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

[main.ts:160741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160741)

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

[main.ts:160763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160763)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateMetaTagsLiveTaskInfo`](ContentGenerationGenerateMetaTagsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateMetaTagsLiveTaskInfo`](ContentGenerationGenerateMetaTagsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:160756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160756)
