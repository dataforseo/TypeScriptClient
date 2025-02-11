[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppInfoTasksReadyResultInfo

# Interface: IAppDataAppleAppInfoTasksReadyResultInfo

Defined in: main.ts:206933

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:206942

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:206946

URL for collecting the results of the Apple App Info task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:206949

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:206936

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:206938

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:206940

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:206944

user-defined task identifier
