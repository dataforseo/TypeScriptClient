[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDomainAnalyticsIdListResultInfo

# Interface: IDomainAnalyticsIdListResultInfo

## Implemented by

- [`DomainAnalyticsIdListResultInfo`](../classes/DomainAnalyticsIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IDomainAnalyticsIdListResultInfo.md#cost)
- [datetime\_done](IDomainAnalyticsIdListResultInfo.md#datetime_done)
- [datetime\_posted](IDomainAnalyticsIdListResultInfo.md#datetime_posted)
- [id](IDomainAnalyticsIdListResultInfo.md#id)
- [metadata](IDomainAnalyticsIdListResultInfo.md#metadata)
- [status](IDomainAnalyticsIdListResultInfo.md#status)
- [url](IDomainAnalyticsIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:71093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71093)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:71088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71088)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:71083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71083)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:71075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71075)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:71095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71095)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:71091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71091)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:71078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71078)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")