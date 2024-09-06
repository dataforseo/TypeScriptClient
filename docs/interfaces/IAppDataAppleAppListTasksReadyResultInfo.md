[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataAppleAppListTasksReadyResultInfo

# Interface: IAppDataAppleAppListTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:195056

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App List task

#### Defined in

main.ts:195060

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:195063

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:195050

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:195052

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:195054

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:195058
