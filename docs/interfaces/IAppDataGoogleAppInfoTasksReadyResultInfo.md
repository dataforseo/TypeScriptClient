[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppInfoTasksReadyResultInfo

# Interface: IAppDataGoogleAppInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:201810

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Info task

#### Defined in

main.ts:201814

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:201817

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:201804

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:201806

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:201808

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:201812
