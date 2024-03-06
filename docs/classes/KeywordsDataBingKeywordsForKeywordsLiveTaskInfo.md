[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsLiveTaskInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingKeywordsForKeywordsLiveTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsLiveTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:126231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126231)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:126227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126227)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md#time)

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

[main.ts:126235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126235)

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

[main.ts:126257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126257)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:126250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126250)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")