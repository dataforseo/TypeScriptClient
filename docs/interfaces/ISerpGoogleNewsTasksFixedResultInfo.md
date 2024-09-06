[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleNewsTasksFixedResultInfo

# Interface: ISerpGoogleNewsTasksFixedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:43752

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:43760

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:43763

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:43757

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:43745

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:43747

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: news

#### Defined in

main.ts:43750

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:43754
