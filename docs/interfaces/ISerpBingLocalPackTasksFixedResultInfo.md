[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpBingLocalPackTasksFixedResultInfo

# Interface: ISerpBingLocalPackTasksFixedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:60953

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:60961

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:60964

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:60958

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:60946

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:60948

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: local_pack

#### Defined in

main.ts:60951

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:60955
