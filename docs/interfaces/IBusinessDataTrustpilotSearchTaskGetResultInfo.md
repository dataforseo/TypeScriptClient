[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataTrustpilotSearchTaskGetResultInfo

# Interface: IBusinessDataTrustpilotSearchTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:215760

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:215765

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:215771

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:215768

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:215755

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:215757
