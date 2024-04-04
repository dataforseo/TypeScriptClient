**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpReviewsTaskPostRequestInfo

# Class: BusinessDataYelpReviewsTaskPostRequestInfo

## Implements

- [`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpReviewsTaskPostRequestInfo(data)

> **new BusinessDataYelpReviewsTaskPostRequestInfo**(`data`?): [`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Returns

[`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Source

main.ts:210233

## Properties

### alias?

> **`optional`** **alias**: `string`

unique business identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique business identifier on Yelp;
you can find this identifier in the URL of every business listed on Yelp
example:
vatos-urban-tacos-singapore
https://www.yelp.com/biz/vatos-urban-tacos-singapore?rl=en

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`alias`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#alias)

#### Source

main.ts:210142

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

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#depth)

#### Source

main.ts:210192

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field if you don’t specify alias
if you use this field, you don’t need to specify alias
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#keyword)

#### Source

main.ts:210149

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
en

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#language_code)

#### Source

main.ts:210185

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
English

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#language_name)

#### Source

main.ts:210178

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or alias
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
9061121

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#location_code)

#### Source

main.ts:210171

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or alias
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#location_name)

#### Source

main.ts:210164

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

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:210229

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

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:210219

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

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#priority)

#### Source

main.ts:210157

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
elites – sort by elite Yelp users first
default value: relevant

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#sort_by)

#### Source

main.ts:210203

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#tag)

#### Source

main.ts:210209

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:210242

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:210270

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Source

main.ts:210263
