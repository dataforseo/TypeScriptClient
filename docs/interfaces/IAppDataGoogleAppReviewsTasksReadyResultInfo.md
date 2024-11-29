[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppReviewsTasksReadyResultInfo

# Interface: IAppDataGoogleAppReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:203176

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Reviews task

#### Defined in

main.ts:203180

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:203183

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:203170

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:203172

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:203174

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:203178
