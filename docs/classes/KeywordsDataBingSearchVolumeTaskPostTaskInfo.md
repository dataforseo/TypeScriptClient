[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTaskPostTaskInfo

# Class: KeywordsDataBingSearchVolumeTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingSearchVolumeTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeTaskPostTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#cost)
- [data](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#data)
- [id](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#id)
- [path](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#path)
- [result](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTaskPostTaskInfo**(`data?`): [`KeywordsDataBingSearchVolumeTaskPostTaskInfo`](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTaskPostTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostTaskInfo`](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:122570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122570)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#data)

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

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#path)

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

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:122566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122566)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeTaskPostTaskInfo.md#time)

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

[main.ts:122574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122574)

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

[main.ts:122592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122592)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskPostTaskInfo`](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostTaskInfo`](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:122585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122585)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")