[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleNewsTasksReadyResultInfo

# Interface: ISerpGoogleNewsTasksReadyResultInfo

## Implemented by

- [`SerpGoogleNewsTasksReadyResultInfo`](../classes/SerpGoogleNewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleNewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleNewsTasksReadyResultInfo.md#id)
- [se](ISerpGoogleNewsTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleNewsTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleNewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:42150](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42150)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:42158](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42158)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:42161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42161)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:42155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42155)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:42143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42143)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:42145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42145)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Defined in

[main.ts:42148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42148)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:42152](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42152)
