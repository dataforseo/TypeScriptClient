[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicTasksFixedResultInfo

# Interface: ISerpYahooOrganicTasksFixedResultInfo

## Implemented by

- [`SerpYahooOrganicTasksFixedResultInfo`](../classes/SerpYahooOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpYahooOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpYahooOrganicTasksFixedResultInfo.md#id)
- [se](ISerpYahooOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpYahooOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpYahooOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:63596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63596)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:63604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63604)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:63607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63607)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:63601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63601)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:63589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63589)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:63591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63591)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:63594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63594)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:63598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63598)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")