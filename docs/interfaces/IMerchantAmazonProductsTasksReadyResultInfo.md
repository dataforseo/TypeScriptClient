**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantAmazonProductsTasksReadyResultInfo

# Interface: IMerchantAmazonProductsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:179875

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Products Advanced task

#### Source

main.ts:179879

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Amazon Products HTML task

#### Source

main.ts:179881

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:179868

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:179870

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Source

main.ts:179873

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:179877
