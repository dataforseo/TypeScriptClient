[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Defined in

main.ts:205844

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:205849

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps

#### Defined in

main.ts:205855

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array

#### Defined in

main.ts:205853

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST request

#### Defined in

main.ts:205835

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:205841

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:205839

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:205837

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:205851
