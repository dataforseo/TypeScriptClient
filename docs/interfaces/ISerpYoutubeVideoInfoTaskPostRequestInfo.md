[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoInfoTaskPostRequestInfo

# Interface: ISerpYoutubeVideoInfoTaskPostRequestInfo

Defined in: main.ts:69671

## Indexable

\[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:69717

device type
optional field
only value: desktop

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:69713

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:69706

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:69699

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:69692

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:69722

device operating system
optional field
choose from the following values: windows, macos
default value: windows

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:69756

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

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:69745

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:69739

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

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:69685

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:69728

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:69677

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4
