**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo

# Class: BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo(data)

> **new BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)

#### Source

main.ts:212881

## Properties

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 100
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`depth`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#depth)

#### Source

main.ts:212871

***

### keyword?

> **`optional`** **keyword**: `string`

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

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#keyword)

#### Source

main.ts:212824

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#language_code)

#### Source

main.ts:212862

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#language_name)

#### Source

main.ts:212855

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#location_code)

#### Source

main.ts:212838

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

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

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#location_coordinate)

#### Source

main.ts:212848

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#location_name)

#### Source

main.ts:212831

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md#tag)

#### Source

main.ts:212877

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:212890

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:212914

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)

#### Source

main.ts:212907
