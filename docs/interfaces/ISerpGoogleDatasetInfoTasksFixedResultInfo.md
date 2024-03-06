[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoTasksFixedResultInfo

# Interface: ISerpGoogleDatasetInfoTasksFixedResultInfo

## Implemented by

- [`SerpGoogleDatasetInfoTasksFixedResultInfo`](../classes/SerpGoogleDatasetInfoTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#id)
- [se](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:52378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52378)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:52386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52386)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:52389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52389)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:52383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52383)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:52371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52371)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:52373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52373)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Defined in

[main.ts:52376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52376)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:52380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52380)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")