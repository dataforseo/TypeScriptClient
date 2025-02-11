[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleAppIntersectionLiveRequestInfo

# Interface: IDataforseoLabsGoogleAppIntersectionLiveRequestInfo

Defined in: main.ts:122902

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

Defined in: main.ts:122917

ids of the target apps
required field
IDs of the target mobile applications on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger;;
the ids should be specified the following way:
"app_ids": {
"1": "org.telegram.messenger",
"2": "com.zhiliaoapp.musically"
}
if you specify a single ID here, the API will return results only for one application;
the maximum number of app IDs you can specify in this object is 20

#### Index Signature

\[`key`: `string`\]: `string`

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:122964

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in
example:
["keyword_data.keyword_info.search_volume",">",500]
[["keyword_data.keyword_info.search_volume","<>",500],"and",[intersection_result.382617920.rank_group",">=","10"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122953

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:122944

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:122986

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:122935

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:122926

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:122991

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:122981

results sorting rules
optional field
you can use the same values as in the filters array to sort the results;
possible sorting types:
asc – results will be sorted in the ascending order;
desc – results will be sorted in the descending order;
you should use a comma to specify a sorting type;
example:
["intersection_result.382617920.rank_absolute,asc"]
Note: you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
["intersection_result.382617920.rank_absolute,desc","keyword_data.keyword_info.search_volume,asc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:122997

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
