[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTasksReadyResultInfo

# Interface: IAppDataGoogleAppListTasksReadyResultInfo

Defined in: main.ts:201409

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:201418

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:201422

URL for collecting the results of the Google App List task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:201425

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:201412

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:201414

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:201416

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:201420

user-defined task identifier
