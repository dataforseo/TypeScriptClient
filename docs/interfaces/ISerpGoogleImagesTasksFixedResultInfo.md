[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleImagesTasksFixedResultInfo

# Interface: ISerpGoogleImagesTasksFixedResultInfo

## Implemented by

- [`SerpGoogleImagesTasksFixedResultInfo`](../classes/SerpGoogleImagesTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleImagesTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleImagesTasksFixedResultInfo.md#id)
- [se](ISerpGoogleImagesTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleImagesTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleImagesTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:45968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45968)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:45976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45976)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:45979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45979)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:45973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45973)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:45961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45961)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:45963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45963)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: images

#### Defined in

[main.ts:45966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45966)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:45970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45970)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")