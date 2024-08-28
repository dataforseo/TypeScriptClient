[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataTripadvisorSearchTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorSearchTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:217737

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:217741

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:217730

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Defined in

main.ts:217733

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:217735

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:217739
