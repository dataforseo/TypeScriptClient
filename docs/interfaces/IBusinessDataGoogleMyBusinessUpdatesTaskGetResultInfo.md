**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### business\_updates\_id?

> **`optional`** **business\_updates\_id**: `string`

identifier of the business updates element in SERP

#### Source

main.ts:202220

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:202213

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

#### Source

main.ts:202224

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:202218

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Source

main.ts:202227

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Source

main.ts:202231

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Source

main.ts:202238

***

### items\_count?

> **`optional`** **items\_count**: `number`

item types
the number of items in the items array

#### Source

main.ts:202234

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Source

main.ts:202204

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:202210

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:202208

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain as specified in a POST array

#### Source

main.ts:202206
