[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataAppleAppInfoTasksReadyResultInfo

# Interface: IAppDataAppleAppInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:194030

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Info task

#### Defined in

main.ts:194034

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:194037

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:194024

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:194026

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:194028

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:194032
