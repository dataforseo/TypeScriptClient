[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Interface: IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

Defined in: main.ts:224233

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:224243

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:224247

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:224236

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:224239

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:224241

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:224245

user-defined task identifier
