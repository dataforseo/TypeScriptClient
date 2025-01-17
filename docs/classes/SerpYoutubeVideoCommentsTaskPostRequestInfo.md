[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTaskPostRequestInfo

# Class: SerpYoutubeVideoCommentsTaskPostRequestInfo

Defined in: main.ts:73016

## Implements

- [`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTaskPostRequestInfo()

> **new SerpYoutubeVideoCommentsTaskPostRequestInfo**(`data`?): [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

Defined in: main.ts:73114

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:73076

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:73062

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:73058

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:73051

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:73044

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:73037

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:73067

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:73110

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

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:73099

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:73093

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

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:73030

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:73082

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#tag)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:73022

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:73123

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:73152

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

Defined in: main.ts:73145

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)
