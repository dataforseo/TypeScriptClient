**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo

# Interface: IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:207346

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
learn more about the identifier in this help center article

#### Source

main.ts:207355

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:207351

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

unique identifier of the SERP feature

#### Source

main.ts:207357

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_question_item

#### Source

main.ts:207361

***

### items?

> **`optional`** **items**: [`BusinessDataGoogleQuestionsAndAnswersItem`](../classes/BusinessDataGoogleQuestionsAndAnswersItem.md)[]

array of items within google_business_question_item
contains answers to the google business questions;
possible item types google_business_answer_element

#### Source

main.ts:207369

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the items array

#### Source

main.ts:207365

***

### items\_without\_answers?

> **`optional`** **items\_without\_answers**: [`ItemsWithoutAnswers`](../classes/ItemsWithoutAnswers.md)[]

array of google business question items without answers

#### Source

main.ts:207363

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

main.ts:207337

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:207343

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:207341

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain as specified in a POST array

#### Source

main.ts:207339