[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonProductsTasksReadyResultInfo

# Interface: IMerchantAmazonProductsTasksReadyResultInfo

Defined in: main.ts:192301

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:192311

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:192315

URL for collecting the results of the Amazon Products Advanced task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:192317

URL for collecting the results of the Amazon Products HTML task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:192304

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:192306

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:192309

type of search engine
can take the following values: organic

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:192313

user-defined task identifier
