[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotSearchTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotSearchTasksReadyResultInfo

Defined in: main.ts:225811

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:225821

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:225825

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:225814

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:225817

search engine specified when setting the task
can take the following values: trustpilot

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:225819

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:225823

user-defined task identifier
