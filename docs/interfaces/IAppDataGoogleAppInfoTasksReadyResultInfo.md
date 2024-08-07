**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleAppInfoTasksReadyResultInfo

# Interface: IAppDataGoogleAppInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:192081

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Info task

#### Source

main.ts:192085

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Google App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Source

main.ts:192088

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:192075

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:192077

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:192079

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:192083
