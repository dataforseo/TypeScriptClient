[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesSummaryLiveTaskInfo

# Class: BacklinksTimeseriesSummaryLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BacklinksTimeseriesSummaryLiveTaskInfo`**

## Implements

- [`IBacklinksTimeseriesSummaryLiveTaskInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesSummaryLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksTimeseriesSummaryLiveTaskInfo.md#cost)
- [data](BacklinksTimeseriesSummaryLiveTaskInfo.md#data)
- [id](BacklinksTimeseriesSummaryLiveTaskInfo.md#id)
- [path](BacklinksTimeseriesSummaryLiveTaskInfo.md#path)
- [result](BacklinksTimeseriesSummaryLiveTaskInfo.md#result)
- [result\_count](BacklinksTimeseriesSummaryLiveTaskInfo.md#result_count)
- [status\_code](BacklinksTimeseriesSummaryLiveTaskInfo.md#status_code)
- [status\_message](BacklinksTimeseriesSummaryLiveTaskInfo.md#status_message)
- [time](BacklinksTimeseriesSummaryLiveTaskInfo.md#time)

### Methods

- [init](BacklinksTimeseriesSummaryLiveTaskInfo.md#init)
- [toJSON](BacklinksTimeseriesSummaryLiveTaskInfo.md#tojson)
- [fromJS](BacklinksTimeseriesSummaryLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesSummaryLiveTaskInfo**(`data?`): [`BacklinksTimeseriesSummaryLiveTaskInfo`](BacklinksTimeseriesSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesSummaryLiveTaskInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md) |

#### Returns

[`BacklinksTimeseriesSummaryLiveTaskInfo`](BacklinksTimeseriesSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:138729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138729)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[cost](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#cost)

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

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[data](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#data)

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

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[id](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[path](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[result](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#result)

#### Defined in

[main.ts:138725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138725)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[result_count](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#result_count)

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

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[status_code](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#status_code)

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

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[status_message](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksTimeseriesSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md).[time](../interfaces/IBacklinksTimeseriesSummaryLiveTaskInfo.md#time)

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

[main.ts:138733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138733)

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

[main.ts:138755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138755)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveTaskInfo`](BacklinksTimeseriesSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesSummaryLiveTaskInfo`](BacklinksTimeseriesSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:138748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138748)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")