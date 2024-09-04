[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleEventsTasksFixedResultInfo

# Interface: ISerpGoogleEventsTasksFixedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:45769

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:45777

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:45780

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:45774

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:45762

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:45764

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Defined in

main.ts:45767

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:45771
