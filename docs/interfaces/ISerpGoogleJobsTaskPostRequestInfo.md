**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleJobsTaskPostRequestInfo

# Interface: ISerpGoogleJobsTaskPostRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

job posting date
optional field
you can use this field to filter job vacancies by posting date;
possible values:
today — return job vacancies posted today;
3days — return job vacancies posted no longer than 3 days ago;
week — return job vacancies posted no longer than a week ago;
month — return job vacancies posted no longer than a month ago

#### Source

main.ts:50661

***

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP;
default value: 10
max value: 200
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting the depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Source

main.ts:50646

***

### employment\_type?

> **`optional`** **employment\_type**: `string`[]

employment contract type
optional field
type of employment contract for which the search results will be returned;
possible values:
fulltime, partime, contractor, intern

#### Source

main.ts:50652

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
Note: the keyword you specify must indicate the job title;
example: .net developer

#### Source

main.ts:50594

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Source

main.ts:50637

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Source

main.ts:50630

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/jobs/locations
example:
2840

#### Source

main.ts:50615

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/jobs/locations
example:
London,England,United Kingdom

#### Source

main.ts:50609

***

### location\_radius?

> **`optional`** **location\_radius**: `number`

location search radius
optional field
location search radius in kilometers;
Note: for countries that use the imperial system of units, you will need to convert miles to kilometers by multiplying the value in miles by 1.609;
if value is not specified, search is executed anywhere within the specified location;
maximal value: 300
minimal value: > 0

#### Source

main.ts:50623

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

#### Source

main.ts:50693

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Source

main.ts:50683

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Source

main.ts:50677

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

#### Source

main.ts:50602

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:50667
