[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisLanguagesTaskInfo

# Class: ContentAnalysisLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentAnalysisLanguagesTaskInfo`**

## Implements

- [`IContentAnalysisLanguagesTaskInfo`](../interfaces/IContentAnalysisLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisLanguagesTaskInfo.md#constructor)

### Properties

- [cost](ContentAnalysisLanguagesTaskInfo.md#cost)
- [data](ContentAnalysisLanguagesTaskInfo.md#data)
- [id](ContentAnalysisLanguagesTaskInfo.md#id)
- [path](ContentAnalysisLanguagesTaskInfo.md#path)
- [result](ContentAnalysisLanguagesTaskInfo.md#result)
- [result\_count](ContentAnalysisLanguagesTaskInfo.md#result_count)
- [status\_code](ContentAnalysisLanguagesTaskInfo.md#status_code)
- [status\_message](ContentAnalysisLanguagesTaskInfo.md#status_message)
- [time](ContentAnalysisLanguagesTaskInfo.md#time)

### Methods

- [init](ContentAnalysisLanguagesTaskInfo.md#init)
- [toJSON](ContentAnalysisLanguagesTaskInfo.md#tojson)
- [fromJS](ContentAnalysisLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisLanguagesTaskInfo**(`data?`): [`ContentAnalysisLanguagesTaskInfo`](ContentAnalysisLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisLanguagesTaskInfo`](../interfaces/IContentAnalysisLanguagesTaskInfo.md) |

#### Returns

[`ContentAnalysisLanguagesTaskInfo`](ContentAnalysisLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:155747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155747)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[cost](../interfaces/IContentAnalysisLanguagesTaskInfo.md#cost)

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

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[data](../interfaces/IContentAnalysisLanguagesTaskInfo.md#data)

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

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[id](../interfaces/IContentAnalysisLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[path](../interfaces/IContentAnalysisLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentAnalysisLanguagesResultInfo`](ContentAnalysisLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[result](../interfaces/IContentAnalysisLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:155743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155743)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[result_count](../interfaces/IContentAnalysisLanguagesTaskInfo.md#result_count)

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

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[status_code](../interfaces/IContentAnalysisLanguagesTaskInfo.md#status_code)

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

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[status_message](../interfaces/IContentAnalysisLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentAnalysisLanguagesTaskInfo](../interfaces/IContentAnalysisLanguagesTaskInfo.md).[time](../interfaces/IContentAnalysisLanguagesTaskInfo.md#time)

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

[main.ts:155751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155751)

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

[main.ts:155773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155773)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisLanguagesTaskInfo`](ContentAnalysisLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisLanguagesTaskInfo`](ContentAnalysisLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:155766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155766)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")