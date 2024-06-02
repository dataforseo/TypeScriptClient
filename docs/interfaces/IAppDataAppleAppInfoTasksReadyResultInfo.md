**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppleAppInfoTasksReadyResultInfo

# Interface: IAppDataAppleAppInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:192030

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Info task

#### Source

main.ts:192034

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Source

main.ts:192037

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:192025

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:192027

***

### se\_type?

> **`optional`** **se\_type**: `string`

#### Source

main.ts:192028

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:192032
