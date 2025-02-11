[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTasksReadyResultInfo

# Interface: IBusinessDataTasksReadyResultInfo

Defined in: main.ts:214099

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:214109

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:214113

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:214102

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:214105

search engine specified when setting the task
can take the following values: tripadvisor

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:214107

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:214111

user-defined task identifier
