[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpSeznamOrganicTasksFixedResultInfo

# Interface: ISerpSeznamOrganicTasksFixedResultInfo

## Implemented by

- [`SerpSeznamOrganicTasksFixedResultInfo`](../classes/SerpSeznamOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpSeznamOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpSeznamOrganicTasksFixedResultInfo.md#id)
- [se](ISerpSeznamOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpSeznamOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpSeznamOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:69990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69990)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:69998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69998)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:70001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70001)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:69995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69995)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:69983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69983)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:69985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69985)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:69988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69988)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:69992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69992)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")