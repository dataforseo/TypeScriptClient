[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationTextSummaryLanguagesTaskInfo

# Class: ContentGenerationTextSummaryLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationTextSummaryLanguagesTaskInfo`**

## Implements

- [`IContentGenerationTextSummaryLanguagesTaskInfo`](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationTextSummaryLanguagesTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationTextSummaryLanguagesTaskInfo.md#cost)
- [data](ContentGenerationTextSummaryLanguagesTaskInfo.md#data)
- [id](ContentGenerationTextSummaryLanguagesTaskInfo.md#id)
- [path](ContentGenerationTextSummaryLanguagesTaskInfo.md#path)
- [result](ContentGenerationTextSummaryLanguagesTaskInfo.md#result)
- [result\_count](ContentGenerationTextSummaryLanguagesTaskInfo.md#result_count)
- [status\_code](ContentGenerationTextSummaryLanguagesTaskInfo.md#status_code)
- [status\_message](ContentGenerationTextSummaryLanguagesTaskInfo.md#status_message)
- [time](ContentGenerationTextSummaryLanguagesTaskInfo.md#time)

### Methods

- [init](ContentGenerationTextSummaryLanguagesTaskInfo.md#init)
- [toJSON](ContentGenerationTextSummaryLanguagesTaskInfo.md#tojson)
- [fromJS](ContentGenerationTextSummaryLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationTextSummaryLanguagesTaskInfo**(`data?`): [`ContentGenerationTextSummaryLanguagesTaskInfo`](ContentGenerationTextSummaryLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationTextSummaryLanguagesTaskInfo`](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md) |

#### Returns

[`ContentGenerationTextSummaryLanguagesTaskInfo`](ContentGenerationTextSummaryLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:162547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162547)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[cost](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#cost)

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

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[data](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#data)

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

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[id](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[path](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationTextSummaryLanguagesResultInfo`](ContentGenerationTextSummaryLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[result](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:162543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162543)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[result_count](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#result_count)

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

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[status_code](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#status_code)

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

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[status_message](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationTextSummaryLanguagesTaskInfo](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md).[time](../interfaces/IContentGenerationTextSummaryLanguagesTaskInfo.md#time)

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

[main.ts:162551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162551)

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

[main.ts:162573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162573)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationTextSummaryLanguagesTaskInfo`](ContentGenerationTextSummaryLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationTextSummaryLanguagesTaskInfo`](ContentGenerationTextSummaryLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:162566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162566)
