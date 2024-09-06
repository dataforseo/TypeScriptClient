[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo

## Extends

- [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo()

> **new BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`constructor`](BusinessDataTaskRequestInfo.md#constructors)

#### Defined in

main.ts:209027

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of question rows in the result
default value: 20
max value: 700
Note: your account will be billed for every 20 questions;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 questions;
if the specified depth is higher than the number of questions in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:209023

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
the keyword you specify should indicate the name of the local establishment
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”; 
this field can also be used to pass the following parameters:
cid – a unique, google-defined id of the business entity;
place_id – an identifier of the business entity in Google Maps;
spp – a unique identifier of local services featured in the local_pack element of Google SERP
example:
cid:194604053573767737
place_id:GhIJQWDl0CIeQUARxks3icF8U8A
spp:CgsvZy8xdGN4cWRraBoUChIJPZDrEzLsZIgRoNrpodC5P30
learn more about the cid and place_id identifiers in this help center article

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#keyword)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`keyword`](BusinessDataTaskRequestInfo.md#keyword)

#### Defined in

main.ts:192880

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#language_code)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`language_code`](BusinessDataTaskRequestInfo.md#language_code)

#### Defined in

main.ts:192926

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#language_name)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`language_name`](BusinessDataTaskRequestInfo.md#language_name)

#### Defined in

main.ts:192919

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#location_code)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_code`](BusinessDataTaskRequestInfo.md#location_code)

#### Defined in

main.ts:192902

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_coordinate`](BusinessDataTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:192912

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#location_name)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_name`](BusinessDataTaskRequestInfo.md#location_name)

#### Defined in

main.ts:192895

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`pingback_url`](BusinessDataTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:192952

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#postback_url)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`postback_url`](BusinessDataTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:192942

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#priority)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`priority`](BusinessDataTaskRequestInfo.md#priority)

#### Defined in

main.ts:192888

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md#tag)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`tag`](BusinessDataTaskRequestInfo.md#tag)

#### Defined in

main.ts:192932

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`init`](BusinessDataTaskRequestInfo.md#init)

#### Defined in

main.ts:209031

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`toJSON`](BusinessDataTaskRequestInfo.md#tojson)

#### Defined in

main.ts:209049

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`fromJS`](BusinessDataTaskRequestInfo.md#fromjs)

#### Defined in

main.ts:209042
