[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpIdListResultInfo

# Interface: ISerpIdListResultInfo

## Implemented by

- [`SerpIdListResultInfo`](../classes/SerpIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](ISerpIdListResultInfo.md#cost)
- [datetime\_done](ISerpIdListResultInfo.md#datetime_done)
- [datetime\_posted](ISerpIdListResultInfo.md#datetime_posted)
- [id](ISerpIdListResultInfo.md#id)
- [metadata](ISerpIdListResultInfo.md#metadata)
- [status](ISerpIdListResultInfo.md#status)
- [url](ISerpIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:22939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22939)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:22934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22934)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:22929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22929)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:22921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22921)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:22941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22941)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:22937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22937)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:22924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22924)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")