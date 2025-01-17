[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTasksReadyResultInfo

# Interface: IBusinessDataTasksReadyResultInfo

Defined in: main.ts:213597

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:213607

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:213611

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:213600

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:213603

search engine specified when setting the task
can take the following values: tripadvisor

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:213605

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:213609

user-defined task identifier
