[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTasksReadyResultInfo

# Interface: ISerpBaiduOrganicTasksReadyResultInfo

## Implemented by

- [`SerpBaiduOrganicTasksReadyResultInfo`](../classes/SerpBaiduOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpBaiduOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpBaiduOrganicTasksReadyResultInfo.md#id)
- [se](ISerpBaiduOrganicTasksReadyResultInfo.md#se)
- [se\_type](ISerpBaiduOrganicTasksReadyResultInfo.md#se_type)
- [tag](ISerpBaiduOrganicTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:66254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66254)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:66262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66262)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:66265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66265)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:66259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66259)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:66247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66247)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:66249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66249)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:66252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66252)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:66256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66256)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")