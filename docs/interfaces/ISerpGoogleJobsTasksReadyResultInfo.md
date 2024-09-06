[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleJobsTasksReadyResultInfo

# Interface: ISerpGoogleJobsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:50457

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:50465

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:50468

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:50462

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:50450

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:50452

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: jobs

#### Defined in

main.ts:50455

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:50459
