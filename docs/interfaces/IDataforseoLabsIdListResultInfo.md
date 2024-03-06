[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsIdListResultInfo

# Interface: IDataforseoLabsIdListResultInfo

## Implemented by

- [`DataforseoLabsIdListResultInfo`](../classes/DataforseoLabsIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IDataforseoLabsIdListResultInfo.md#cost)
- [datetime\_done](IDataforseoLabsIdListResultInfo.md#datetime_done)
- [datetime\_posted](IDataforseoLabsIdListResultInfo.md#datetime_posted)
- [id](IDataforseoLabsIdListResultInfo.md#id)
- [metadata](IDataforseoLabsIdListResultInfo.md#metadata)
- [status](IDataforseoLabsIdListResultInfo.md#status)
- [url](IDataforseoLabsIdListResultInfo.md#url)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Defined in

[main.ts:76653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76653)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:76648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76648)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

[main.ts:76643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76643)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:76635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76635)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:76655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76655)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Defined in

[main.ts:76651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76651)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Defined in

[main.ts:76638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76638)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")