**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Source

main.ts:191508

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:191513

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps

#### Source

main.ts:191519

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array

#### Source

main.ts:191517

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST request

#### Source

main.ts:191499

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:191505

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:191503

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:191501

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Source

main.ts:191515
