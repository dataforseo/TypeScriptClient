[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoInfoTasksFixedResultInfo

# Interface: ISerpYoutubeVideoInfoTasksFixedResultInfo

## Implemented by

- [`SerpYoutubeVideoInfoTasksFixedResultInfo`](../classes/SerpYoutubeVideoInfoTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#id)
- [se](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se)
- [se\_type](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se_type)
- [tag](ISerpYoutubeVideoInfoTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:58512

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58520

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58523

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58517

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:58505

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:58507

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_info

#### Defined in

main.ts:58510

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:58514
