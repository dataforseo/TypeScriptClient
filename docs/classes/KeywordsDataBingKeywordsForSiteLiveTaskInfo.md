[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteLiveTaskInfo

# Class: KeywordsDataBingKeywordsForSiteLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingKeywordsForSiteLiveTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteLiveTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteLiveTaskInfo`](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteLiveTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveTaskInfo`](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:124855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124855)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#result)

#### Defined in

[main.ts:124851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124851)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteLiveTaskInfo.md#time)

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

[main.ts:124859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124859)

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

[main.ts:124881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124881)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveTaskInfo`](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveTaskInfo`](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:124874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124874)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")