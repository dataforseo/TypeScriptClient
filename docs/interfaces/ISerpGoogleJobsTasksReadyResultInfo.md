[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleJobsTasksReadyResultInfo

# Interface: ISerpGoogleJobsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:54154

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:54162

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:54165

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:54159

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:54147

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:54149

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: jobs

#### Defined in

main.ts:54152

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:54156
