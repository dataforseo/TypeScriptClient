**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleEventsTaskPostRequestInfo

# Class: SerpGoogleEventsTaskPostRequestInfo

## Implements

- [`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTaskPostRequestInfo(data)

> **new SerpGoogleEventsTaskPostRequestInfo**(`data`?): [`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

#### Source

main.ts:44597

## Properties

### date\_range?

> **`optional`** **date\_range**: `string`

date range to get events for
optional field
if you do not use this field, we will return all events
possible values: today, tomorrow, week, weekend, next_week, month, next_month

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`date_range`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#date_range)

#### Source

main.ts:44532

***

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting a depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#depth)

#### Source

main.ts:44554

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#keyword)

#### Source

main.ts:44478

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#language_code)

#### Source

main.ts:44527

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#language_name)

#### Source

main.ts:44519

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
2840

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#location_code)

#### Source

main.ts:44500

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
data will be provided for the country the specified coordinates belong to
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#location_coordinate)

#### Source

main.ts:44511

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#location_name)

#### Source

main.ts:44493

***

### max\_crawl\_pages?

> **`optional`** **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#max_crawl_pages)

#### Source

main.ts:44561

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#os)

#### Source

main.ts:44538

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

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:44593

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:44583

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

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:44577

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#priority)

#### Source

main.ts:44486

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#se_domain)

#### Source

main.ts:44545

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#tag)

#### Source

main.ts:44567

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:44606

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:44638

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

#### Source

main.ts:44631
