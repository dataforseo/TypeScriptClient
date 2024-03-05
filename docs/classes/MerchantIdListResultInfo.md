[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantIdListResultInfo

# Class: MerchantIdListResultInfo

## Implements

- [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantIdListResultInfo.md#constructor)

### Properties

- [cost](MerchantIdListResultInfo.md#cost)
- [datetime\_done](MerchantIdListResultInfo.md#datetime_done)
- [datetime\_posted](MerchantIdListResultInfo.md#datetime_posted)
- [id](MerchantIdListResultInfo.md#id)
- [metadata](MerchantIdListResultInfo.md#metadata)
- [status](MerchantIdListResultInfo.md#status)
- [url](MerchantIdListResultInfo.md#url)

### Methods

- [init](MerchantIdListResultInfo.md#init)
- [toJSON](MerchantIdListResultInfo.md#tojson)
- [fromJS](MerchantIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantIdListResultInfo**(`data?`): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md) |

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Defined in

[main.ts:162801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162801)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[cost](../interfaces/IMerchantIdListResultInfo.md#cost)

#### Defined in

[main.ts:162795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162795)

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[datetime_done](../interfaces/IMerchantIdListResultInfo.md#datetime_done)

#### Defined in

[main.ts:162790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162790)

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[datetime_posted](../interfaces/IMerchantIdListResultInfo.md#datetime_posted)

#### Defined in

[main.ts:162785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162785)

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[id](../interfaces/IMerchantIdListResultInfo.md#id)

#### Defined in

[main.ts:162777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162777)

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[metadata](../interfaces/IMerchantIdListResultInfo.md#metadata)

#### Defined in

[main.ts:162797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162797)

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[status](../interfaces/IMerchantIdListResultInfo.md#status)

#### Defined in

[main.ts:162793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162793)

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IMerchantIdListResultInfo](../interfaces/IMerchantIdListResultInfo.md).[url](../interfaces/IMerchantIdListResultInfo.md#url)

#### Defined in

[main.ts:162780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162780)

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

[main.ts:162810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162810)

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

[main.ts:162839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162839)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Defined in

[main.ts:162832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162832)
