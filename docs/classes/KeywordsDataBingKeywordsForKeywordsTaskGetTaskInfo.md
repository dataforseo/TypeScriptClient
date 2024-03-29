[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:125713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125713)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:125709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125709)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md#time)

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

[main.ts:125717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125717)

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

[main.ts:125739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125739)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:125732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125732)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")