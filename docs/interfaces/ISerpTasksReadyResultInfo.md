**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpTasksReadyResultInfo

# Interface: ISerpTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:25572

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Source

main.ts:25580

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Source

main.ts:25583

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Source

main.ts:25577

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:25565

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:25567

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: organic

#### Source

main.ts:25570

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:25574
