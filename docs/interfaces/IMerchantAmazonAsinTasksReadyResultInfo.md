[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonAsinTasksReadyResultInfo

# Interface: IMerchantAmazonAsinTasksReadyResultInfo

Defined in: main.ts:193909

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:193919

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:193923

URL for collecting the results of the Amazon ASIN Advanced task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:193925

URL for collecting the results of the Amazon ASIN HTML task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:193912

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:193914

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:193917

type of search engine
can take the following values: shopping

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:193921

user-defined task identifier
