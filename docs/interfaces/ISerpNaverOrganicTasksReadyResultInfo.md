[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpNaverOrganicTasksReadyResultInfo

# Interface: ISerpNaverOrganicTasksReadyResultInfo

## Implemented by

- [`SerpNaverOrganicTasksReadyResultInfo`](../classes/SerpNaverOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpNaverOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpNaverOrganicTasksReadyResultInfo.md#id)
- [se](ISerpNaverOrganicTasksReadyResultInfo.md#se)
- [se\_type](ISerpNaverOrganicTasksReadyResultInfo.md#se_type)
- [tag](ISerpNaverOrganicTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:67668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67668)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:67676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67676)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:67679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67679)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:67673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67673)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:67661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67661)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:67663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67663)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:67666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67666)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:67670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67670)
