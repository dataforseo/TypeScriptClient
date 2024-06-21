**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersLiveResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersLiveResultInfo

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersLiveResultInfo(data)

> **new BusinessDataGoogleQuestionsAndAnswersLiveResultInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

#### Source

main.ts:209578

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#check_url)

#### Source

main.ts:209551

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#cid)

#### Source

main.ts:209560

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#datetime)

#### Source

main.ts:209556

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

unique identifier of the SERP feature

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#feature_id)

#### Source

main.ts:209562

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#item_types)

#### Source

main.ts:209566

***

### items?

> **`optional`** **items**: [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)[]

array of items within google_business_question_item
contains answers to the google business questions;
possible item types google_business_answer_element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#items)

#### Source

main.ts:209574

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#items_count)

#### Source

main.ts:209570

***

### items\_without\_answers?

> **`optional`** **items\_without\_answers**: [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)[]

array of google business question items without answers

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`items_without_answers`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#items_without_answers)

#### Source

main.ts:209568

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#keyword)

#### Source

main.ts:209542

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#language_code)

#### Source

main.ts:209548

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#location_code)

#### Source

main.ts:209546

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md#se_domain)

#### Source

main.ts:209544

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209587

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209627

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersLiveResultInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResultInfo.md)

#### Source

main.ts:209620
