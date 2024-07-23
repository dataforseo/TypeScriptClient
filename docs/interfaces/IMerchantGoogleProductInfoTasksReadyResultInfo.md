**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantGoogleProductInfoTasksReadyResultInfo

# Interface: IMerchantGoogleProductInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Source

main.ts:180890

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Source

main.ts:180894

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

#### Source

main.ts:180897

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Source

main.ts:180883

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Source

main.ts:180885

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: shopping_specifications

#### Source

main.ts:180888

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Source

main.ts:180892
