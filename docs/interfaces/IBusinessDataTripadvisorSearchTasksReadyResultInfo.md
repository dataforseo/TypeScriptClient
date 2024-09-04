[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataTripadvisorSearchTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorSearchTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:213027

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:213031

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:213020

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Defined in

main.ts:213023

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:213025

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:213029
