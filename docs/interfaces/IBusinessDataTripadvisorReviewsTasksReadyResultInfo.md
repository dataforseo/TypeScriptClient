[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorReviewsTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorReviewsTasksReadyResultInfo

Defined in: main.ts:229543

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:229553

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:229557

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:229546

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:229549

search engine specified when setting the task
can take the following values: tripadvisor

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:229551

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:229555

user-defined task identifier
