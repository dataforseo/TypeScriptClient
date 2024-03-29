[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo

# Class: DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:72898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72898)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#result)

#### Defined in

[main.ts:72894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72894)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md#time)

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

[main.ts:72902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72902)

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

[main.ts:72924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72924)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:72917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72917)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")