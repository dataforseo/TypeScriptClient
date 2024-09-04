[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantAmazonProductsTasksReadyResultInfo

# Interface: IMerchantAmazonProductsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:180122

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Products Advanced task

#### Defined in

main.ts:180126

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Products HTML task

#### Defined in

main.ts:180128

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:180115

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:180117

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

main.ts:180120

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:180124
