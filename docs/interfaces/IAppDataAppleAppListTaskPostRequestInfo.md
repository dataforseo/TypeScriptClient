[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppListTaskPostRequestInfo

# Interface: IAppDataAppleAppListTaskPostRequestInfo

Defined in: main.ts:207692

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_category?

> `optional` **app\_category**: `string`

Defined in: main.ts:207751

application category on the App Store
optional field
you can filter the results by app category;
example:
lifestyle;
you can review the full list of available categories here or by making a separate request to https://api.dataforseo.com/v3/app_data/apple/categories

***

### app\_collection?

> `optional` **app\_collection**: `string`

Defined in: main.ts:207698

app collection
required field
app collection on App Store from which apps will be collected;
you can specify the following values:
top_free_ios, top_paid_ios, top_grossing_ios, new_ios, new_free_ios, new_paid_ios

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:207744

parsing depth
optional field
number of apps to be returned from the App Store SERP;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
default value: 100
maximum value: 1000

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:207726

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:207719

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:207712

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:207705

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:207785

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

Defined in: main.ts:207774

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:207768

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

Defined in: main.ts:207734

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

Defined in: main.ts:207757

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
