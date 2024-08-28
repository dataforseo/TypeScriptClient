[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ISerpGoogleEventsTasksFixedResultInfo

# Interface: ISerpGoogleEventsTasksFixedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:47503

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:47511

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:47514

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:47508

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:47496

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:47498

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Defined in

main.ts:47501

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:47505
