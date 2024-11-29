[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskPostRequestInfo

# Class: SerpYahooOrganicTaskPostRequestInfo

## Implements

- [`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskPostRequestInfo()

> **new SerpYahooOrganicTaskPostRequestInfo**(`data`?): [`SerpYahooOrganicTaskPostRequestInfo`](SerpYahooOrganicTaskPostRequestInfo.md)

#### Parameters

##### data?

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md)

#### Returns

[`SerpYahooOrganicTaskPostRequestInfo`](SerpYahooOrganicTaskPostRequestInfo.md)

#### Defined in

main.ts:75307

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:75258

***

### device?

> `optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`device`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#device)

#### Defined in

main.ts:75235

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:75184

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languages
example:
en

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:75230

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languages
example:
English

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:75223

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locations
example:
2840

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:75206

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

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:75216

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:75199

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:75265

***

### os?

> `optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`os`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#os)

#### Defined in

main.ts:75242

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

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:75303

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, html

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:75292

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

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:75286

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

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:75192

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
au.search.yahoo.com, uk.search.yahoo.com, ca.search.yahoo.com, etc.

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#se_domain)

#### Defined in

main.ts:75249

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`search_param`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#search_param)

#### Defined in

main.ts:75269

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:75275

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://search.yahoo.com/search?p=rank+checker&n=100&vl=lang_en&vc=us&ei=UTF-8

#### Implementation of

[`ISerpYahooOrganicTaskPostRequestInfo`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md).[`url`](../interfaces/ISerpYahooOrganicTaskPostRequestInfo.md#url)

#### Defined in

main.ts:75176

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:75316

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:75350

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskPostRequestInfo`](SerpYahooOrganicTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskPostRequestInfo`](SerpYahooOrganicTaskPostRequestInfo.md)

#### Defined in

main.ts:75343
