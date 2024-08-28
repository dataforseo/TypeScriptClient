[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAppDataAppleAppListTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppListTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Defined in

main.ts:199827

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:199832

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:199840

***

### items\_count?

> `optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:199837

***

### keyword?

> `optional` **keyword**: `string`

app collection received in a POST array

#### Defined in

main.ts:199818

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:199824

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:199822

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:199820

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:199834
