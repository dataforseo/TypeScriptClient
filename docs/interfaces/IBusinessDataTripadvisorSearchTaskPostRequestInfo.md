[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorSearchTaskPostRequestInfo

# Interface: IBusinessDataTripadvisorSearchTaskPostRequestInfo

Defined in: main.ts:228328

## Indexable

\[`key`: `string`\]: `any`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:228363

parsing depth
optional field
number of search results to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of thirty because our systems processes thirty search results in a row;
default value: 30;
maximum value: 210

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:228336

keyword
required field
the keyword you specify should indicate a business category, company name, or a prominent place;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:228348

search engine location code
required field if you don’t specify location_name
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:228342

full name of search engine location
required field if you don’t specify location_code
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:228391

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

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:228380

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

Defined in: main.ts:228356

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

Defined in: main.ts:228369

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
