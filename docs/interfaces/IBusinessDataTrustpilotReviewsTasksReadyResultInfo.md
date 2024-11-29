[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotReviewsTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:226509

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:226513

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:226502

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Defined in

main.ts:226505

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:226507

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:226511
