**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleAppReviewsTaskPostRequestInfo

# Interface: IAppDataGoogleAppReviewsTaskPostRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
https://play.google.com/store/apps/details?id=org.telegram.messenger

#### Source

main.ts:190509

***

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of reviews to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 150, because our system processes 150 reviews in a row;
default value: 150;
maximum value: 100000

#### Source

main.ts:190552

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Source

main.ts:190537

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Source

main.ts:190530

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Source

main.ts:190523

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Source

main.ts:190516

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

main.ts:190603

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Source

main.ts:190593

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

#### Source

main.ts:190587

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

#### Source

main.ts:190545

***

### rating?

> **`optional`** **rating**: `number`

filter reviews by rating
optional field
you can use this field to filter the results;
possible types of filtering:
5 — return reviews with five-star rating only;
4 — return reviews with four-star rating only;
3 — return reviews with three-star rating only;
2 — return reviews with two-star rating only;
1 — return reviews with one-star rating only;
by default, the API returns all reviews regardless of the number of stars

#### Source

main.ts:190563

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
newest — sort by the most recent reviews;
most_relevant — sort by the most relevant reviews;
default rule: most_relevant

#### Source

main.ts:190571

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:190577
