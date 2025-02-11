[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataTasksReadyResultInfo

# Interface: IAppDataTasksReadyResultInfo

Defined in: main.ts:200395

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:200404

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:200408

URL for collecting the results of the Apple App Reviews task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:200411

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:200398

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:200400

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:200402

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:200406

user-defined task identifier
