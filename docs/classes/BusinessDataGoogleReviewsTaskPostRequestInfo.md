**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTaskPostRequestInfo

# Class: BusinessDataGoogleReviewsTaskPostRequestInfo

## Extends

- [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

## Implements

- [`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTaskPostRequestInfo(data)

> **new BusinessDataGoogleReviewsTaskPostRequestInfo**(`data`?): [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`constructor`](BusinessDataTaskRequestInfo.md#constructors)

#### Source

main.ts:210865

## Properties

### cid?

> **`optional`** **cid**: `string`

unique, google-defined id of the business entity
required field if you don’t specify keyword or place_id
example:
194604053573767737
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`cid`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#cid)

#### Source

main.ts:210838

***

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10
maximum value: 4490

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#depth)

#### Source

main.ts:210851

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#keyword)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`keyword`](BusinessDataTaskRequestInfo.md#keyword)

#### Source

main.ts:195561

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#language_code)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`language_code`](BusinessDataTaskRequestInfo.md#language_code)

#### Source

main.ts:195607

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#language_name)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`language_name`](BusinessDataTaskRequestInfo.md#language_name)

#### Source

main.ts:195600

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_code)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_code`](BusinessDataTaskRequestInfo.md#location_code)

#### Source

main.ts:195583

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_coordinate`](BusinessDataTaskRequestInfo.md#location_coordinate)

#### Source

main.ts:195593

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#location_name)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_name`](BusinessDataTaskRequestInfo.md#location_name)

#### Source

main.ts:195576

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`pingback_url`](BusinessDataTaskRequestInfo.md#pingback_url)

#### Source

main.ts:195633

***

### place\_id?

> **`optional`** **place\_id**: `string`

identifier of the business entity in Google Maps
required field if you don’t specify keyword or cid
example:
GhIJQWDl0CIeQUARxks3icF8U8A
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`place_id`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#place_id)

#### Source

main.ts:210844

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

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

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#postback_url)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`postback_url`](BusinessDataTaskRequestInfo.md#postback_url)

#### Source

main.ts:195623

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#priority)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`priority`](BusinessDataTaskRequestInfo.md#priority)

#### Source

main.ts:195569

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

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

#### Source

main.ts:210861

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleReviewsTaskPostRequestInfo.md#tag)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`tag`](BusinessDataTaskRequestInfo.md#tag)

#### Source

main.ts:195613

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`init`](BusinessDataTaskRequestInfo.md#init)

#### Source

main.ts:210869

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`toJSON`](BusinessDataTaskRequestInfo.md#tojson)

#### Source

main.ts:210890

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`fromJS`](BusinessDataTaskRequestInfo.md#fromjs)

#### Source

main.ts:210883
