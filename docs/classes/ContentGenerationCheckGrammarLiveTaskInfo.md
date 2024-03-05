[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLiveTaskInfo

# Class: ContentGenerationCheckGrammarLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationCheckGrammarLiveTaskInfo`**

## Implements

- [`IContentGenerationCheckGrammarLiveTaskInfo`](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationCheckGrammarLiveTaskInfo.md#cost)
- [data](ContentGenerationCheckGrammarLiveTaskInfo.md#data)
- [id](ContentGenerationCheckGrammarLiveTaskInfo.md#id)
- [path](ContentGenerationCheckGrammarLiveTaskInfo.md#path)
- [result](ContentGenerationCheckGrammarLiveTaskInfo.md#result)
- [result\_count](ContentGenerationCheckGrammarLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationCheckGrammarLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationCheckGrammarLiveTaskInfo.md#status_message)
- [time](ContentGenerationCheckGrammarLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationCheckGrammarLiveTaskInfo.md#init)
- [toJSON](ContentGenerationCheckGrammarLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLiveTaskInfo**(`data?`): [`ContentGenerationCheckGrammarLiveTaskInfo`](ContentGenerationCheckGrammarLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLiveTaskInfo`](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md) |

#### Returns

[`ContentGenerationCheckGrammarLiveTaskInfo`](ContentGenerationCheckGrammarLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:161687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161687)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[cost](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#cost)

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

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[data](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#data)

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

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[id](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[path](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[result](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#result)

#### Defined in

[main.ts:161683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161683)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#result_count)

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

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#status_code)

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

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationCheckGrammarLiveTaskInfo](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md).[time](../interfaces/IContentGenerationCheckGrammarLiveTaskInfo.md#time)

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

[main.ts:161691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161691)

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

[main.ts:161713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161713)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveTaskInfo`](ContentGenerationCheckGrammarLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLiveTaskInfo`](ContentGenerationCheckGrammarLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:161706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161706)
