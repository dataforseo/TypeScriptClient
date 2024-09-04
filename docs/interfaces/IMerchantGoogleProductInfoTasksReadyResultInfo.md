[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantGoogleProductInfoTasksReadyResultInfo

# Interface: IMerchantGoogleProductInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:178470

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Defined in

main.ts:178474

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

#### Defined in

main.ts:178477

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:178463

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:178465

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: shopping_specifications

#### Defined in

main.ts:178468

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:178472
