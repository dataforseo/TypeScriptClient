**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppleAppSearchesTasksReadyResultInfo

# Interface: IAppDataAppleAppSearchesTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:189111

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Searches task

#### Source

main.ts:189115

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Apple App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Source

main.ts:189118

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:189107

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:189109

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:189113
