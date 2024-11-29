[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo()

> **new BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

#### Defined in

main.ts:224696

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:224668

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#cid)

#### Defined in

main.ts:224677

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:224673

***

### feature\_id?

> `optional` **feature\_id**: `string`

unique identifier of the SERP feature

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#feature_id)

#### Defined in

main.ts:224679

***

### item\_types?

> `optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#item_types)

#### Defined in

main.ts:224683

***

### items?

> `optional` **items**: [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)[]

array of items within google_business_question_item
contains answers to the google business questions;
the maximum number of answers returned for each question: 5
possible item types google_business_answer_element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#items)

#### Defined in

main.ts:224692

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:224687

***

### items\_without\_answers?

> `optional` **items\_without\_answers**: [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)[]

array of google business question items without answers

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`items_without_answers`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#items_without_answers)

#### Defined in

main.ts:224685

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:224659

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:224665

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:224663

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:224661

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:224705

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:224745

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

#### Defined in

main.ts:224738
