[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksIdListResultInfo

# Interface: IBacklinksIdListResultInfo

## Implemented by

- [`BacklinksIdListResultInfo`](../classes/BacklinksIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IBacklinksIdListResultInfo.md#cost)
- [datetime\_done](IBacklinksIdListResultInfo.md#datetime_done)
- [datetime\_posted](IBacklinksIdListResultInfo.md#datetime_posted)
- [id](IBacklinksIdListResultInfo.md#id)
- [metadata](IBacklinksIdListResultInfo.md#metadata)
- [status](IBacklinksIdListResultInfo.md#status)
- [url](IBacklinksIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

main.ts:128314

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:128309

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:128304

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

main.ts:128296

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

main.ts:128316

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

main.ts:128312

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

main.ts:128299
