[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleNewsTasksFixedResultInfo

# Interface: ISerpGoogleNewsTasksFixedResultInfo

## Implemented by

- [`SerpGoogleNewsTasksFixedResultInfo`](../classes/SerpGoogleNewsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleNewsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleNewsTasksFixedResultInfo.md#id)
- [se](ISerpGoogleNewsTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleNewsTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleNewsTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:42362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42362)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:42370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42370)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:42373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42373)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:42367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42367)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:42355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42355)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:42357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42357)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Defined in

[main.ts:42360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42360)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:42364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42364)
