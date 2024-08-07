**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Interface: IBusinessDataGoogleHotelSearchesTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:206338

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Source

main.ts:206342

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:206331

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Source

main.ts:206334

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:206336

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:206340
