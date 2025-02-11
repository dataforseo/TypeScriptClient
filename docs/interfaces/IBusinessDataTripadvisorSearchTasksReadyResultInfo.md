[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorSearchTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorSearchTasksReadyResultInfo

Defined in: main.ts:228565

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:228575

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:228579

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:228568

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:228571

search engine specified when setting the task
can take the following values: tripadvisor

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:228573

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:228577

user-defined task identifier
