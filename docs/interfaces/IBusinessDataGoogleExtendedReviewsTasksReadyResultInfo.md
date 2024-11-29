[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo

# Interface: IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:223017

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:223021

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:223010

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Defined in

main.ts:223013

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine

#### Defined in

main.ts:223015

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:223019
