[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTaskPostRequestInfo

# Interface: IAppDataGoogleAppListTaskPostRequestInfo

Defined in: main.ts:201131

## Indexable

\[`key`: `string`\]: `any`

## Properties

### age\_rating?

> `optional` **age\_rating**: `string`

Defined in: main.ts:201199

filter results by age rating
optional field
you can use this field to filter the results by age rating;
possible types of filtering:
ages_up_to_5 — return apps approved for children up to 5 years old;
ages_6_8 — return apps approved for children from 6 to 8 years old;
ages_9_12 — return apps approved for children from 9 to 12 years old;
by default, the API returns apps for all ages;
Note: this filter works only in conjunction with the "category": "family" parameter

***

### app\_category?

> `optional` **app\_category**: `string`

Defined in: main.ts:201189

application category on Google Play
optional field
you can filter the results by app category;
example:
family;
you can receive the full list of available categories by making a separate request to https://api.dataforseo.com/v3/app_data/google/categories
Note: app_category cannot be used if app_collection parameter is set to featured

***

### app\_collection?

> `optional` **app\_collection**: `string`

Defined in: main.ts:201138

app collection
required field
app collection on Google Play from which apps will be collected;
you can specify the following values:
featured, topselling_paid, topselling_free, topselling_new_free, topselling_new_paid, topgrossing, movers_shakers
Note: if featured is selected, the app_category parameter cannot be used

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:201181

parsing depth
optional field
number of apps to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
default value: 100;
maximum value: 200

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201166

search engine language code
required field if language_name is not specified
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:201159

full name of search engine language
required field if language_code is not specified
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201152

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:201145

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:201231

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:201221

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:201215

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:201174

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

Defined in: main.ts:201205

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
