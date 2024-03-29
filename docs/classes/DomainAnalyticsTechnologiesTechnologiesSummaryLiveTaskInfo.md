[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:73386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73386)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#result)

#### Defined in

[main.ts:73382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73382)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md#time)

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

[main.ts:73390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73390)

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

[main.ts:73412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73412)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:73405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73405)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")