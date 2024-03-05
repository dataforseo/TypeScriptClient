[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationParaphraseLiveTaskInfo

# Class: ContentGenerationParaphraseLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationParaphraseLiveTaskInfo`**

## Implements

- [`IContentGenerationParaphraseLiveTaskInfo`](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationParaphraseLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationParaphraseLiveTaskInfo.md#cost)
- [data](ContentGenerationParaphraseLiveTaskInfo.md#data)
- [id](ContentGenerationParaphraseLiveTaskInfo.md#id)
- [path](ContentGenerationParaphraseLiveTaskInfo.md#path)
- [result](ContentGenerationParaphraseLiveTaskInfo.md#result)
- [result\_count](ContentGenerationParaphraseLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationParaphraseLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationParaphraseLiveTaskInfo.md#status_message)
- [time](ContentGenerationParaphraseLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationParaphraseLiveTaskInfo.md#init)
- [toJSON](ContentGenerationParaphraseLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationParaphraseLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationParaphraseLiveTaskInfo**(`data?`): [`ContentGenerationParaphraseLiveTaskInfo`](ContentGenerationParaphraseLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationParaphraseLiveTaskInfo`](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md) |

#### Returns

[`ContentGenerationParaphraseLiveTaskInfo`](ContentGenerationParaphraseLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:161273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161273)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[cost](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#cost)

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

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[data](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#data)

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

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[id](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[path](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[result](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#result)

#### Defined in

[main.ts:161269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161269)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#result_count)

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

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#status_code)

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

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationParaphraseLiveTaskInfo](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md).[time](../interfaces/IContentGenerationParaphraseLiveTaskInfo.md#time)

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

[main.ts:161277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161277)

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

[main.ts:161299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161299)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationParaphraseLiveTaskInfo`](ContentGenerationParaphraseLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationParaphraseLiveTaskInfo`](ContentGenerationParaphraseLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:161292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161292)
