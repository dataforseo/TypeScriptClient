[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo

# Interface: IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo

Defined in: main.ts:225836

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:225852

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:225861

google-defined client id
unique id of a local establishment;
learn more about the identifier in this help center article

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:225857

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:225863

unique identifier of the SERP feature

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:225867

item types
types of search engine results encountered in the items array;
possible item types: google_business_question_item

***

### items?

> `optional` **items**: [`BusinessDataGoogleQuestionsAndAnswersItem`](../classes/BusinessDataGoogleQuestionsAndAnswersItem.md)[]

Defined in: main.ts:225875

array of items within google_business_question_item
contains answers to the google business questions;
possible item types google_business_answer_element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:225871

the number of items in the items array

***

### items\_without\_answers?

> `optional` **items\_without\_answers**: [`ItemsWithoutAnswers`](../classes/ItemsWithoutAnswers.md)[]

Defined in: main.ts:225869

array of google business question items without answers

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:225843

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:225849

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:225847

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:225845

search engine domain as specified in a POST array
