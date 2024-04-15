**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataYelpSearchTaskGetResultInfo

# Interface: IBusinessDataYelpSearchTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Source

main.ts:210152

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:210157

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types encountered in the result
possible item types: yelp_search_organic, yelp_search_paid

#### Source

main.ts:210160

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Yelp search listing results
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:210168

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:210165

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Source

main.ts:210142

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:210149

***

### location\_code?

> **`optional`** **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Source

main.ts:210147

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:210144

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Source

main.ts:210162
