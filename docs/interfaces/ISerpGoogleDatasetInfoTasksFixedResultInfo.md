[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoTasksFixedResultInfo

# Interface: ISerpGoogleDatasetInfoTasksFixedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:59424

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:59432

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:59435

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:59429

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:59417

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:59419

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Defined in

main.ts:59422

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:59426
