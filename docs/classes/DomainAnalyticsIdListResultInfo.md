[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsIdListResultInfo

# Class: DomainAnalyticsIdListResultInfo

## Implements

- [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsIdListResultInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsIdListResultInfo.md#cost)
- [datetime\_done](DomainAnalyticsIdListResultInfo.md#datetime_done)
- [datetime\_posted](DomainAnalyticsIdListResultInfo.md#datetime_posted)
- [id](DomainAnalyticsIdListResultInfo.md#id)
- [metadata](DomainAnalyticsIdListResultInfo.md#metadata)
- [status](DomainAnalyticsIdListResultInfo.md#status)
- [url](DomainAnalyticsIdListResultInfo.md#url)

### Methods

- [init](DomainAnalyticsIdListResultInfo.md#init)
- [toJSON](DomainAnalyticsIdListResultInfo.md#tojson)
- [fromJS](DomainAnalyticsIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsIdListResultInfo**(`data?`): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md) |

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Defined in

[main.ts:71012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71012)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[cost](../interfaces/IDomainAnalyticsIdListResultInfo.md#cost)

#### Defined in

[main.ts:71006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71006)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[datetime_done](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_done)

#### Defined in

[main.ts:71001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71001)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[datetime_posted](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_posted)

#### Defined in

[main.ts:70996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70996)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[id](../interfaces/IDomainAnalyticsIdListResultInfo.md#id)

#### Defined in

[main.ts:70988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70988)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[metadata](../interfaces/IDomainAnalyticsIdListResultInfo.md#metadata)

#### Defined in

[main.ts:71008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71008)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[status](../interfaces/IDomainAnalyticsIdListResultInfo.md#status)

#### Defined in

[main.ts:71004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71004)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IDomainAnalyticsIdListResultInfo](../interfaces/IDomainAnalyticsIdListResultInfo.md).[url](../interfaces/IDomainAnalyticsIdListResultInfo.md#url)

#### Defined in

[main.ts:70991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70991)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:71021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71021)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:71050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71050)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Defined in

[main.ts:71043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71043)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")