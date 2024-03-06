[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataYelpReviewsTasksReadyResultInfo

# Interface: IBusinessDataYelpReviewsTasksReadyResultInfo

## Implemented by

- [`BusinessDataYelpReviewsTasksReadyResultInfo`](../classes/BusinessDataYelpReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataYelpReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataYelpReviewsTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataYelpReviewsTasksReadyResultInfo.md#id)
- [se](IBusinessDataYelpReviewsTasksReadyResultInfo.md#se)
- [se\_type](IBusinessDataYelpReviewsTasksReadyResultInfo.md#se_type)
- [tag](IBusinessDataYelpReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:205113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205113)

___


### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

[main.ts:205117](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205117)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:205105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205105)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Defined in

[main.ts:205108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205108)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: reviews

#### Defined in

[main.ts:205111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205111)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:205115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205115)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")