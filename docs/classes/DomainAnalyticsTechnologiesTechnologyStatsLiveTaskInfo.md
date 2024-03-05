[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:73810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73810)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#result)

#### Defined in

[main.ts:73806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73806)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md#time)

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

[main.ts:73814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73814)

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

[main.ts:73836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73836)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:73829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73829)
