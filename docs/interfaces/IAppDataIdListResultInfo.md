[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataIdListResultInfo

# Interface: IAppDataIdListResultInfo

## Implemented by

- [`AppDataIdListResultInfo`](../classes/AppDataIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IAppDataIdListResultInfo.md#cost)
- [datetime\_done](IAppDataIdListResultInfo.md#datetime_done)
- [datetime\_posted](IAppDataIdListResultInfo.md#datetime_posted)
- [id](IAppDataIdListResultInfo.md#id)
- [metadata](IAppDataIdListResultInfo.md#metadata)
- [status](IAppDataIdListResultInfo.md#status)
- [url](IAppDataIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:176507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176507)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:176502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176502)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:176497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176497)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:176489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176489)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:176509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176509)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:176505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176505)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:176492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176492)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")