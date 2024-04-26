**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantAmazonReviewsTasksReadyResultInfo

# Interface: IMerchantAmazonReviewsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:181880

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Source

main.ts:181884

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Source

main.ts:181886

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:181873

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:181875

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Source

main.ts:181878

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:181882
