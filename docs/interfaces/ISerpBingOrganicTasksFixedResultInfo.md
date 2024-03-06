[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicTasksFixedResultInfo

# Interface: ISerpBingOrganicTasksFixedResultInfo

## Implemented by

- [`SerpBingOrganicTasksFixedResultInfo`](../classes/SerpBingOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpBingOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpBingOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBingOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBingOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpBingOrganicTasksFixedResultInfo.md#id)
- [se](ISerpBingOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpBingOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpBingOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:54082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54082)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:54090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54090)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:54093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54093)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:54087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54087)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:54075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54075)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:54077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54077)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:54080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54080)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:54084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54084)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")