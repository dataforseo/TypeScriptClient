[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataGoogleReviewsTasksReadyResultInfo

# Interface: IBusinessDataGoogleReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:212968

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:212972

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:212961

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Defined in

main.ts:212964

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine

#### Defined in

main.ts:212966

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:212970
