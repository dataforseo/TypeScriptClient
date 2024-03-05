[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageIdListResultInfo

# Interface: IOnPageIdListResultInfo

## Implemented by

- [`OnPageIdListResultInfo`](../classes/OnPageIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IOnPageIdListResultInfo.md#cost)
- [datetime\_done](IOnPageIdListResultInfo.md#datetime_done)
- [datetime\_posted](IOnPageIdListResultInfo.md#datetime_posted)
- [id](IOnPageIdListResultInfo.md#id)
- [metadata](IOnPageIdListResultInfo.md#metadata)
- [status](IOnPageIdListResultInfo.md#status)
- [url](IOnPageIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:141666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141666)

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:141661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141661)

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:141656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141656)

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:141648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141648)

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:141668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141668)

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:141664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141664)

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:141651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141651)
