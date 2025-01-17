[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

Defined in: main.ts:215932

## Indexable

\[`key`: `string`\]: `any`

## Properties

### business\_updates\_id?

> `optional` **business\_updates\_id**: `string`

Defined in: main.ts:215955

identifier of the business updates element in SERP

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:215948

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:215959

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:215953

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:215962

the unique identifier of the element in SERP
learn more about the identifier in this help center article

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:215966

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:215973

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_post

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:215969

item types
the number of items in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:215939

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:215945

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:215943

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:215941

search engine domain as specified in a POST array
