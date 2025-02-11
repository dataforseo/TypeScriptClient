[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

Defined in: main.ts:213905

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:213915

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:213919

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:213908

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:213911

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:213913

search engine specified when setting the task

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:213917

user-defined task identifier
