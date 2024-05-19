**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantAmazonSellersTasksReadyResultInfo

# Interface: IMerchantAmazonSellersTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:181800

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of Amazon Sellers Advanced task

#### Source

main.ts:181804

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of Amazon Sellers HTML task

#### Source

main.ts:181806

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:181793

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:181795

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Source

main.ts:181798

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:181802
