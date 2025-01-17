[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTasksReadyResultInfo

# Interface: IAppDataGoogleAppListTasksReadyResultInfo

Defined in: main.ts:200907

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:200916

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:200920

URL for collecting the results of the Google App List task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:200923

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:200910

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:200912

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:200914

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:200918

user-defined task identifier
