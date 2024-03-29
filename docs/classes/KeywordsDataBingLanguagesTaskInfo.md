[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingLanguagesTaskInfo

# Class: KeywordsDataBingLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingLanguagesTaskInfo`**

## Implements

- [`IKeywordsDataBingLanguagesTaskInfo`](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingLanguagesTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingLanguagesTaskInfo.md#cost)
- [data](KeywordsDataBingLanguagesTaskInfo.md#data)
- [id](KeywordsDataBingLanguagesTaskInfo.md#id)
- [path](KeywordsDataBingLanguagesTaskInfo.md#path)
- [result](KeywordsDataBingLanguagesTaskInfo.md#result)
- [result\_count](KeywordsDataBingLanguagesTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingLanguagesTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingLanguagesTaskInfo.md#status_message)
- [time](KeywordsDataBingLanguagesTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingLanguagesTaskInfo.md#init)
- [toJSON](KeywordsDataBingLanguagesTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingLanguagesTaskInfo**(`data?`): [`KeywordsDataBingLanguagesTaskInfo`](KeywordsDataBingLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingLanguagesTaskInfo`](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md) |

#### Returns

[`KeywordsDataBingLanguagesTaskInfo`](KeywordsDataBingLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:122181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122181)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[cost](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#cost)

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

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[data](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#data)

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

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[id](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[path](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingLanguagesResultInfo`](KeywordsDataBingLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[result](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:122177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122177)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#result_count)

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

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#status_code)

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

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingLanguagesTaskInfo](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md).[time](../interfaces/IKeywordsDataBingLanguagesTaskInfo.md#time)

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

[main.ts:122185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122185)

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

[main.ts:122207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122207)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingLanguagesTaskInfo`](KeywordsDataBingLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingLanguagesTaskInfo`](KeywordsDataBingLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:122200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122200)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")