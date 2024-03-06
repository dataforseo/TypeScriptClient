[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpNaverOrganicTasksFixedResultInfo

# Interface: ISerpNaverOrganicTasksFixedResultInfo

## Implemented by

- [`SerpNaverOrganicTasksFixedResultInfo`](../classes/SerpNaverOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpNaverOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpNaverOrganicTasksFixedResultInfo.md#id)
- [se](ISerpNaverOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpNaverOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpNaverOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:67880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67880)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:67888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67888)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:67891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67891)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:67885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67885)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:67873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67873)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:67875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67875)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:67878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67878)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:67882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67882)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")