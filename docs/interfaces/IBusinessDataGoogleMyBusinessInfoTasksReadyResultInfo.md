[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

Defined in: main.ts:213403

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:213413

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:213417

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:213406

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:213409

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:213411

search engine specified when setting the task

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:213415

user-defined task identifier
