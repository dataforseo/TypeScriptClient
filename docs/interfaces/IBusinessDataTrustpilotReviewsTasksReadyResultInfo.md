[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotReviewsTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotReviewsTasksReadyResultInfo

Defined in: main.ts:226567

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:226577

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:226581

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:226570

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:226573

search engine specified when setting the task
can take the following values: trustpilot

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:226575

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:226579

user-defined task identifier
