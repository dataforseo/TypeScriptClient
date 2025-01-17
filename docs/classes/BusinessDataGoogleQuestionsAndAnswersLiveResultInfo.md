[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersLiveResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersLiveResultInfo

Defined in: main.ts:225202

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersLiveResultInfo()

> **new BusinessDataGoogleQuestionsAndAnswersLiveResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

Defined in: main.ts:225245

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:225218

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#check_url)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:225227

google-defined client id
unique id of a local establishment;
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#cid)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:225223

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#datetime)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:225229

unique identifier of the SERP feature

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#feature_id)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:225233

item types
types of search engine results encountered in the items array;
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)[]

Defined in: main.ts:225241

array of items within google_business_question_item
contains answers to the google business questions;
possible item types google_business_answer_element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:225237

the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#items_count)

***

### items\_without\_answers?

> `optional` **items\_without\_answers**: [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)[]

Defined in: main.ts:225235

array of google business question items without answers

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`items_without_answers`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#items_without_answers)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:225209

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:225215

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:225213

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:225211

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#se_domain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:225254

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:225294

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

Defined in: main.ts:225287

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)
