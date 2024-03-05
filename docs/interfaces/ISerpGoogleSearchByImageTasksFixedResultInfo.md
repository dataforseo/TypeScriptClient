[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleSearchByImageTasksFixedResultInfo

# Interface: ISerpGoogleSearchByImageTasksFixedResultInfo

## Implemented by

- [`SerpGoogleSearchByImageTasksFixedResultInfo`](../classes/SerpGoogleSearchByImageTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleSearchByImageTasksFixedResultInfo.md#id)
- [se](ISerpGoogleSearchByImageTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:47888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47888)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:47896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47896)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:47899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47899)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:47893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47893)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:47881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47881)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:47883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47883)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Defined in

[main.ts:47886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47886)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:47890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47890)
