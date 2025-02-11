[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Interface: IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

Defined in: main.ts:224741

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:224751

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:224755

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:224744

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:224747

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:224749

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:224753

user-defined task identifier
