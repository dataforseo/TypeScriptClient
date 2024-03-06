[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeLiveTaskInfo

# Class: KeywordsDataBingSearchVolumeLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingSearchVolumeLiveTaskInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeLiveTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeLiveTaskInfo.md#cost)
- [data](KeywordsDataBingSearchVolumeLiveTaskInfo.md#data)
- [id](KeywordsDataBingSearchVolumeLiveTaskInfo.md#id)
- [path](KeywordsDataBingSearchVolumeLiveTaskInfo.md#path)
- [result](KeywordsDataBingSearchVolumeLiveTaskInfo.md#result)
- [result\_count](KeywordsDataBingSearchVolumeLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingSearchVolumeLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeLiveTaskInfo.md#status_message)
- [time](KeywordsDataBingSearchVolumeLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingSearchVolumeLiveTaskInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeLiveTaskInfo**(`data?`): [`KeywordsDataBingSearchVolumeLiveTaskInfo`](KeywordsDataBingSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeLiveTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeLiveTaskInfo`](KeywordsDataBingSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:123511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123511)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[data](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#data)

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

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[id](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[path](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[result](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#result)

#### Defined in

[main.ts:123507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123507)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#result_count)

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

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeLiveTaskInfo.md#time)

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

[main.ts:123515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123515)

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

[main.ts:123537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123537)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveTaskInfo`](KeywordsDataBingSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeLiveTaskInfo`](KeywordsDataBingSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:123530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123530)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")