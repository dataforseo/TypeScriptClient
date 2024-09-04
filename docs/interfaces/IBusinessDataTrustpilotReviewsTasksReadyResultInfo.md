[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataTrustpilotReviewsTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:216237

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:216241

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:216230

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Defined in

main.ts:216233

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:216235

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:216239
