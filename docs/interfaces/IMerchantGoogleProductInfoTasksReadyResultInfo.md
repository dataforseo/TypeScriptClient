[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductInfoTasksReadyResultInfo

# Interface: IMerchantGoogleProductInfoTasksReadyResultInfo

Defined in: main.ts:190708

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:190718

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:190722

URL for collecting the results of the Google Shopping Product Specifications Advanced task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:190725

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:190711

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:190713

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:190716

type of search engine
can take the following values: shopping_specifications

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:190720

user-defined task identifier
