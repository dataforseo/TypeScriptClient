**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTaskPostRequestInfo

# Class: SerpYoutubeVideoInfoTaskPostRequestInfo

## Implements

- [`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTaskPostRequestInfo(data)

> **new SerpYoutubeVideoInfoTaskPostRequestInfo**(`data`?): [`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Source

main.ts:60214

## Properties

### device?

> **`optional`** **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#device)

#### Source

main.ts:60173

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#language_code)

#### Source

main.ts:60169

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#language_name)

#### Source

main.ts:60162

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#location_code)

#### Source

main.ts:60155

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#location_name)

#### Source

main.ts:60148

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#os)

#### Source

main.ts:60178

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

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:60210

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:60200

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

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:60194

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

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#priority)

#### Source

main.ts:60141

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#tag)

#### Source

main.ts:60184

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#video_id)

#### Source

main.ts:60133

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:60223

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:60251

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Source

main.ts:60244
