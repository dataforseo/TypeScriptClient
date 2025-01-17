[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleLocalFinderTaskPostRequestInfo

# Interface: ISerpGoogleLocalFinderTaskPostRequestInfo

Defined in: main.ts:43050

## Indexable

\[`key`: `string`\]: `any`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:43126

parsing depth
optional field
number of results in SERP
default value for desktop: 20
max value for desktop: 500default value for mobile: 10
max value for mobile: 350
Note: your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;
thus, setting a depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:43109

device type
optional field
can take the values:desktop, mobile
default value: desktop

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:43058

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:43104

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:43098

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:43080

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:43091

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,zoom” format
if “zoom” is not specified, 9z will be applied as a default value
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “zoom”: 4z
the maximum value for “zoom”: 18z
example:
52.6178549,-155.352142,18z

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:43073

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

***

### min\_rating?

> `optional` **min\_rating**: `number`

Defined in: main.ts:43131

filter results by minimum rating
optional field
possible values for desktop: 3.5, 4, 4.5;
possible values for mobile: 2, 2.5, 3, 3.5, 4, 4.5

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:43116

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:43174

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

Defined in: main.ts:43163

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:43157

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

Defined in: main.ts:43066

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

Defined in: main.ts:43146

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### time\_filter?

> `optional` **time\_filter**: `string`

Defined in: main.ts:43140

filter results by open hours
optional field
using this field, you can filter places in the results by the time a place is open for visitors
note that Google may also provide results that do not match this filter
possible values: "open_now", "24_hours", "$day_value", "$day_value;$time_value";
instead of $day_value use one of these values: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday";
instead of $time_value use one of these values: "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
example: "tuesday;18"
