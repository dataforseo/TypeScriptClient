**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataYelpSearchTasksReadyResultInfo

# Interface: IBusinessDataYelpSearchTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:209362

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Source

main.ts:209366

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:209354

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Source

main.ts:209357

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: search

#### Source

main.ts:209360

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:209364
