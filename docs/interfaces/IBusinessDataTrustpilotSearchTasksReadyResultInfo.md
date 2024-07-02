**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotSearchTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotSearchTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:210672

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Source

main.ts:210676

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:210665

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Source

main.ts:210668

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:210670

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:210674
