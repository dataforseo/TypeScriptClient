[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleLocalFinderTasksFixedResultInfo

# Interface: ISerpGoogleLocalFinderTasksFixedResultInfo

Defined in: main.ts:43587

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:43597

date when the task was fixed (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:43605

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:43608

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:43602

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:43590

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:43592

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:43595

type of search engine
can take the following values: local_finder

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:43599

user-defined task identifier
