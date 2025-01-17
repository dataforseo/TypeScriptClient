[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

Defined in: main.ts:215561

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:215571

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:215575

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:215564

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:215567

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:215569

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:215573

user-defined task identifier
