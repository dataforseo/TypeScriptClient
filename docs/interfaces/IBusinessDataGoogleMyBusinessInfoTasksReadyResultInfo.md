**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:200271

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Source

main.ts:200275

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:200264

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Source

main.ts:200267

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine specified when setting the task

#### Source

main.ts:200269

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:200273
