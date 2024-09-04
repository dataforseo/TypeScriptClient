[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataTrustpilotSearchTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotSearchTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:210791

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:210795

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:210784

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Defined in

main.ts:210787

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:210789

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:210793
