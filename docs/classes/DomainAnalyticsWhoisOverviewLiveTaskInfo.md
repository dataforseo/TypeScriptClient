[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsWhoisOverviewLiveTaskInfo

# Class: DomainAnalyticsWhoisOverviewLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DomainAnalyticsWhoisOverviewLiveTaskInfo`**

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveTaskInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#cost)
- [data](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#data)
- [id](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#id)
- [path](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#path)
- [result](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#result)
- [result\_count](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#status_message)
- [time](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#init)
- [toJSON](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsWhoisOverviewLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsWhoisOverviewLiveTaskInfo**(`data?`): [`DomainAnalyticsWhoisOverviewLiveTaskInfo`](DomainAnalyticsWhoisOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsWhoisOverviewLiveTaskInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md) |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveTaskInfo`](DomainAnalyticsWhoisOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:76318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76318)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[cost](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#cost)

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

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[data](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#data)

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

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[id](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[path](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[result](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#result)

#### Defined in

[main.ts:76314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76314)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#result_count)

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

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#status_code)

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

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveTaskInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md).[time](../interfaces/IDomainAnalyticsWhoisOverviewLiveTaskInfo.md#time)

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

[main.ts:76322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76322)

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

[main.ts:76344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76344)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveTaskInfo`](DomainAnalyticsWhoisOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveTaskInfo`](DomainAnalyticsWhoisOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:76337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76337)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")