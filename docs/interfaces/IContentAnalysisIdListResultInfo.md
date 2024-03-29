[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentAnalysisIdListResultInfo

# Interface: IContentAnalysisIdListResultInfo

## Implemented by

- [`ContentAnalysisIdListResultInfo`](../classes/ContentAnalysisIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IContentAnalysisIdListResultInfo.md#cost)
- [datetime\_done](IContentAnalysisIdListResultInfo.md#datetime_done)
- [datetime\_posted](IContentAnalysisIdListResultInfo.md#datetime_posted)
- [id](IContentAnalysisIdListResultInfo.md#id)
- [metadata](IContentAnalysisIdListResultInfo.md#metadata)
- [status](IContentAnalysisIdListResultInfo.md#status)
- [url](IContentAnalysisIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:155236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155236)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:155231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155231)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:155226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155226)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:155218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155218)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:155238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155238)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:155234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155234)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:155221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155221)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")