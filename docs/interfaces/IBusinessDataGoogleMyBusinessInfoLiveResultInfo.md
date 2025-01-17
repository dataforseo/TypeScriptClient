[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessInfoLiveResultInfo

# Interface: IBusinessDataGoogleMyBusinessInfoLiveResultInfo

Defined in: main.ts:214997

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:215013

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:215018

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:215022

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:215029

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:215025

item types
the number of items in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:215004

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:215010

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:215008

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:215006

search engine domain as specified in a POST array
