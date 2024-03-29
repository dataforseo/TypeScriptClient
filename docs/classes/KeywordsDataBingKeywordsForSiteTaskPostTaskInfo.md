[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTaskPostTaskInfo

# Class: KeywordsDataBingKeywordsForSiteTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingKeywordsForSiteTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTaskPostTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:123910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123910)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:123906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123906)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md#time)

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

[main.ts:123914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123914)

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

[main.ts:123932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123932)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:123925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123925)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")