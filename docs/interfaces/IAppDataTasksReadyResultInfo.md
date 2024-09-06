[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataTasksReadyResultInfo

# Interface: IAppDataTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:187498

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Defined in

main.ts:187502

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:187505

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:187492

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:187494

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:187496

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:187500
