[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleSearchByImageTasksReadyResultInfo

# Interface: ISerpGoogleSearchByImageTasksReadyResultInfo

## Implemented by

- [`SerpGoogleSearchByImageTasksReadyResultInfo`](../classes/SerpGoogleSearchByImageTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleSearchByImageTasksReadyResultInfo.md#id)
- [se](ISerpGoogleSearchByImageTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:47676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47676)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:47684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47684)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:47687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47687)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:47681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47681)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:47669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47669)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:47671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47671)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Defined in

[main.ts:47674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47674)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:47678](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47678)
