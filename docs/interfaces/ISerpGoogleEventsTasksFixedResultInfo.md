**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleEventsTasksFixedResultInfo

# Interface: ISerpGoogleEventsTasksFixedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Source

main.ts:46971

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Source

main.ts:46979

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Source

main.ts:46982

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Source

main.ts:46976

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:46964

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:46966

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: events

#### Source

main.ts:46969

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:46973
