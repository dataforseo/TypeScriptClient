[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleImagesTasksReadyResultInfo

# Interface: ISerpGoogleImagesTasksReadyResultInfo

## Implemented by

- [`SerpGoogleImagesTasksReadyResultInfo`](../classes/SerpGoogleImagesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleImagesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleImagesTasksReadyResultInfo.md#id)
- [se](ISerpGoogleImagesTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleImagesTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleImagesTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:45756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45756)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:45764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45764)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:45767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45767)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:45761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45761)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:45749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45749)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:45751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45751)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: images

#### Defined in

[main.ts:45754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45754)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:45758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45758)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")