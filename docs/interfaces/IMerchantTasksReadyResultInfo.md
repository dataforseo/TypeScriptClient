**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantTasksReadyResultInfo

# Interface: IMerchantTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:173468

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Source

main.ts:173472

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Source

main.ts:173474

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:173462

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:173464

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine

#### Source

main.ts:173466

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:173470