[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataIdListResultInfo

# Interface: IKeywordsDataIdListResultInfo

## Implemented by

- [`KeywordsDataIdListResultInfo`](../classes/KeywordsDataIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IKeywordsDataIdListResultInfo.md#cost)
- [datetime\_done](IKeywordsDataIdListResultInfo.md#datetime_done)
- [datetime\_posted](IKeywordsDataIdListResultInfo.md#datetime_posted)
- [id](IKeywordsDataIdListResultInfo.md#id)
- [metadata](IKeywordsDataIdListResultInfo.md#metadata)
- [status](IKeywordsDataIdListResultInfo.md#status)
- [url](IKeywordsDataIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

main.ts:112593

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:112588

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:112583

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

main.ts:112575

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

main.ts:112595

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

main.ts:112591

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

main.ts:112578
