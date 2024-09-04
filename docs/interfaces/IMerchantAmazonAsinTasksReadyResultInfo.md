[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantAmazonAsinTasksReadyResultInfo

# Interface: IMerchantAmazonAsinTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:186066

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon ASIN Advanced task

#### Defined in

main.ts:186070

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon ASIN HTML task

#### Defined in

main.ts:186072

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:186059

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:186061

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Defined in

main.ts:186064

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:186068
