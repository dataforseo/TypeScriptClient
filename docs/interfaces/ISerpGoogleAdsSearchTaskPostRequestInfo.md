[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAdsSearchTaskPostRequestInfo

# Interface: ISerpGoogleAdsSearchTaskPostRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### advertiser\_ids?

> `optional` **advertiser\_ids**: `string`[]

advertiser identifiers
required field if target is not specified
you can specify the maximum of 25 values in this array;
advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint;

#### Defined in

main.ts:61910

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
required field if date_to is specified; 
date format: "yyyy-mm-dd"
minimum value: 2018-05-31
maximum value: today’s date
example:
"2020-01-01"

#### Defined in

main.ts:61948

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
required field if date_from is specified; 
date format: "yyyy-mm-dd"
minimum value: 2018-05-31
maximum value: today’s date
example:
"2020-01-01"

#### Defined in

main.ts:61957

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 40
max value: 700
Note: your account will be billed per each SERP containing up to 40 results;
thus, setting a depth above 40 may result in additional charges if the search engine returns more than 40 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

main.ts:61966

***

### format?

> `optional` **format**: `string`

ad format
optional field
possible values: all, text, image, video

#### Defined in

main.ts:61939

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
2840

#### Defined in

main.ts:61924

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
example:
52.6178549,-155.352142

#### Defined in

main.ts:61930

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:61917

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

#### Defined in

main.ts:62008

***

### platform?

> `optional` **platform**: `string`

advertising platform
optional field
possible values: all, google_pay, google_maps, google_search, google_shopping, youtube
default value: all

#### Defined in

main.ts:61935

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced

#### Defined in

main.ts:61997

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

#### Defined in

main.ts:61991

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

#### Defined in

main.ts:61974

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:61980

***

### target?

> `optional` **target**: `string`

domain name
required field if advertiser_ids is not specified
domain name associated with an advertiser account

#### Defined in

main.ts:61905
