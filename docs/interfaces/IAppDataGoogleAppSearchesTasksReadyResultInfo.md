**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleAppSearchesTasksReadyResultInfo

# Interface: IAppDataGoogleAppSearchesTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:183275

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Searches task

#### Source

main.ts:183279

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Google App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Source

main.ts:183282

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:183271

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:183273

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:183277
