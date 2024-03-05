[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleMapsTasksFixedResultInfo

# Interface: ISerpGoogleMapsTasksFixedResultInfo

## Implemented by

- [`SerpGoogleMapsTasksFixedResultInfo`](../classes/SerpGoogleMapsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleMapsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleMapsTasksFixedResultInfo.md#id)
- [se](ISerpGoogleMapsTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleMapsTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleMapsTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:38082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38082)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:38090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38090)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:38093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38093)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:38087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38087)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:38075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38075)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:38077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38077)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Defined in

[main.ts:38080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38080)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:38084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38084)
