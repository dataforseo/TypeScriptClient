[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo

# Interface: IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:206524

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:206529

***

### item\_types?

> `optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Defined in

main.ts:206533

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

array of directory items

#### Defined in

main.ts:206538

***

### items\_count?

> `optional` **items\_count**: `number`

item types
the number of items in the items array

#### Defined in

main.ts:206536

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Defined in

main.ts:206515

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:206521

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:206519

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Defined in

main.ts:206517
