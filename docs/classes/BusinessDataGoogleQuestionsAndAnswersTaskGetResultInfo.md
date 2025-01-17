[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo

Defined in: main.ts:224720

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo()

> **new BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

Defined in: main.ts:224764

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:224736

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#check_url)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:224745

google-defined client id
unique id of a local establishment;
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#cid)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:224741

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#datetime)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:224747

unique identifier of the SERP feature

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#feature_id)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:224751

item types
types of search engine results encountered in the items array;
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)[]

Defined in: main.ts:224760

array of items within google_business_question_item
contains answers to the google business questions;
the maximum number of answers returned for each question: 5
possible item types google_business_answer_element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:224755

the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#items_count)

***

### items\_without\_answers?

> `optional` **items\_without\_answers**: [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)[]

Defined in: main.ts:224753

array of google business question items without answers

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`items_without_answers`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#items_without_answers)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:224727

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:224733

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:224731

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:224729

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md#se_domain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:224773

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:224813

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)

Defined in: main.ts:224806

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo.md)
