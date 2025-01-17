[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataTasksReadyResultInfo

# Interface: IAppDataTasksReadyResultInfo

Defined in: main.ts:199893

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:199902

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:199906

URL for collecting the results of the Apple App Reviews task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:199909

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:199896

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:199898

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:199900

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:199904

user-defined task identifier
