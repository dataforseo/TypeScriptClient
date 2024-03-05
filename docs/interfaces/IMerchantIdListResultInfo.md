[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantIdListResultInfo

# Interface: IMerchantIdListResultInfo

## Implemented by

- [`MerchantIdListResultInfo`](../classes/MerchantIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IMerchantIdListResultInfo.md#cost)
- [datetime\_done](IMerchantIdListResultInfo.md#datetime_done)
- [datetime\_posted](IMerchantIdListResultInfo.md#datetime_posted)
- [id](IMerchantIdListResultInfo.md#id)
- [metadata](IMerchantIdListResultInfo.md#metadata)
- [status](IMerchantIdListResultInfo.md#status)
- [url](IMerchantIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:162882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162882)

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:162877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162877)

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:162872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162872)

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:162864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162864)

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:162884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162884)

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:162880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162880)

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:162867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162867)
