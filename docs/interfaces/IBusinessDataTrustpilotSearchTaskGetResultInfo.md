[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotSearchTaskGetResultInfo

# Interface: IBusinessDataTrustpilotSearchTaskGetResultInfo

Defined in: main.ts:226597

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:226604

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:226609

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:226615

found reviews
you can get more results by using the depth parameter when setting a task

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:226612

the number of items in the results array
you can get more results by using the depth parameter when setting a task

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:226599

keyword in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:226601

search engine domain in a POST array
