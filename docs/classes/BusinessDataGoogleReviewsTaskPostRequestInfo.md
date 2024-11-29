[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTaskPostRequestInfo

# Class: BusinessDataGoogleReviewsTaskPostRequestInfo

## Implements

- [`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTaskPostRequestInfo()

> **new BusinessDataGoogleReviewsTaskPostRequestInfo**(`data`?): [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Defined in

main.ts:221524

## Properties

### cid?

> `optional` **cid**: `string`

unique, google-defined id of the business entity
required field if you don’t specify keyword or place_id
example:
194604053573767737
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`cid`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#cid)

#### Defined in

main.ts:221424

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10
maximum value: 4490

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:221482

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field if you don’t specify cid or place_id
the keyword you specify should indicate the name of the local establishment;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:221418

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:221475

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to the https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:221468

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:221452

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:221461

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:221445

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
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:221520

***

### place\_id?

> `optional` **place\_id**: `string`

identifier of the business entity in Google Maps
required field if you don’t specify keyword or cid
example:
GhIJQWDl0CIeQUARxks3icF8U8A
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`place_id`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#place_id)

#### Defined in

main.ts:221430

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
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:221509

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:221438

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
newest – sort by newest first
highest_rating – sort by highest rating
lowest_rating – sort by lowest rating
relevant – sort by relevance
default value: relevant

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:221492

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:221498

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:221533

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:221563

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Defined in

main.ts:221556
