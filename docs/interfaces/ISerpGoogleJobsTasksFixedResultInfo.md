[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleJobsTasksFixedResultInfo

# Interface: ISerpGoogleJobsTasksFixedResultInfo

## Implemented by

- [`SerpGoogleJobsTasksFixedResultInfo`](../classes/SerpGoogleJobsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleJobsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleJobsTasksFixedResultInfo.md#id)
- [se](ISerpGoogleJobsTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleJobsTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleJobsTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:48980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48980)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:48988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48988)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:48991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48991)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:48985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48985)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:48973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48973)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:48975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48975)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: jobs

#### Defined in

[main.ts:48978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48978)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:48982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48982)
