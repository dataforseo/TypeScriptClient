**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorReviewsTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:213390

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Source

main.ts:213394

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:213383

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Source

main.ts:213386

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:213388

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:213392
